import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname, join } from 'path';
import prettier from 'prettier';
import { ScanOptions } from '../../types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from '../../utils/constants';

// extname 返回扩展名
// fast-glob 文件系统遍历工具
export interface DoPrettierOptions extends ScanOptions {}
export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN,
    });
  }
  await Promise.all(files.map(formatFile));
}

async function formatFile(filepath: string) {
  // 读取文件内容
  const text = await readFile(filepath, 'utf8');
  // 获取配置
  const options = await prettier.resolveConfig(filepath);
  // 格式化内容
  const formatted = prettier.format(text, { ...options, filepath });
  // 输出内容
  await writeFile(filepath, formatted, 'utf8');

  /**
   * prettier.resolveConfig 是一个函数，用于解析和获取项目中的 prettier 配置。它会搜索项目目录及其父级目录中的配置文件，找到最接近的配置文件，并返回解析后的配置对象。
   * prettier.format 是一个函数，用于格式化代码。它接受一个代码字符串作为输入，并返回格式化后的代码字符串。它会根据项目中的 prettier 配置来进行代码格式化，包括缩进、换行、括号等等。这个函数可以用于在开发过程中自动格式化代码，以保持代码风格的一致性。
   */
}
