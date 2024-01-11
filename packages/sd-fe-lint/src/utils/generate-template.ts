import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import ejs from 'ejs';
import _ from 'lodash';
import {
  ESLINT_IGNORE_PATTERN,
  STYLELINT_FILE_EXT,
  STYLELINT_IGNORE_PATTERN,
  MARKDOWN_LINT_IGNORE_PATTERN,
} from './constants';

const mergeVSCodeConfig = (filepath: string, content: string) => {
  // 不需要 merge
  if (!fs.existsSync(filepath)) return content;

  try {
    const targetData = fs.readJSONSync(filepath);
    const sourceData = JSON.parse(content);
    return JSON.stringify(
      _.mergeWith(targetData, sourceData, (target, source) => {
        if (Array.isArray(target) && Array.isArray(source)) {
          return [...new Set(source.concat(target))];
        }
      }),
      null,
      2,
    );
  } catch (e) {
    return '';
  }
};

// 实例化模版
export default async (cwd: string, data: Record<string, any>, vscode?: boolean) => {
  // 获取config 绝对路径
  const templatePath = path.resolve(__dirname, '../config');
  const templates = glob.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, { cwd: templatePath });

  for (const name of templates) {
    const filePath = path.resolve(cwd, name.replace(/\.ejs$/, '').replace(/^_/, '.'));
    // ejs 模版渲染
    let content = ejs.render(fs.readFileSync(path.resolve(templatePath, name), 'utf-8'), {
      eslintIgnores: ESLINT_IGNORE_PATTERN,
      stylelintExt: STYLELINT_FILE_EXT,
      stylelintIgnores: STYLELINT_IGNORE_PATTERN,
      markdownLintIgnores: MARKDOWN_LINT_IGNORE_PATTERN,
      ...data,
    });

    // 合并 vscode config
    if (/^_vscode/.test(name)) {
      content = mergeVSCodeConfig(filePath, content);
    }

    // 跳过空文件
    if (!content.trim()) continue;

    fs.outputFileSync(filePath, content, 'utf8');
  }
};
