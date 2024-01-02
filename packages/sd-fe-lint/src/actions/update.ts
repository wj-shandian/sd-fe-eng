import ora from 'ora';
import npmType from '../utils/npm-type';
import { PKG_NAME } from '../utils/constants';

/*
 * 检查版本并自动升级
 */
export default async (install = true) => {
  // ora 作用是用于node的控制台进度美化 这里只是展示作用 没啥实际意义
  const checking = ora(`Checking ${PKG_NAME} version...`).start();
  // 关键逻辑在这里
  try {
    const npm = await npmType;
  } catch (error) {}
};
