import gulp from 'gulp';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

gulp.task('dict', () => {
  const API_ENV = process.env.API_ENV;
  if (!API_ENV) {
    console.log('请提供 API 环境 <test 01~12, prod>');
    return false;
  }
  const dictApi = `http://${API_ENV === 'prod' ? '' : API_ENV + '.'}youyu.top/api/dict`;
  axios.get(dictApi).then(res => {
    const data = _.get(res, 'data.data');
    if (!data) {
      return false;
    }
    // const filePath = path.join(__dirname, 'dict.json');
    // fs.writeFile(filePath, JSON.stringify(data), 'utf8', () => {
    //   // console.log('字典文件写入成功~');
    //   // console.log(`保存路径：${filePath}`);
    // });

    const jsonStr = JSON.stringify(data);
    const str = `/* eslint-disable */ \n export default { state: ${jsonStr}}`;
    const filePath = path.join(path.dirname(__dirname), 'src', 'store', 'modules', 'dict.js');
    fs.writeFile(filePath, str, 'utf8', () => {
      // console.log('字典文件写入成功~');
      // console.log(`保存路径：${filePathLabel}`);
    });

    const obj = {};
    Object.keys(data).forEach((el) => {
      obj[el] = [];
      Object.keys(data[el]).forEach((cel) => {
        const temp = {
          value: cel,
          label: data[el][cel],
        };
        obj[el].push(temp);
      });
    });

    const jsonLabelStr = JSON.stringify(obj);
    const strLabel = `/* eslint-disable */ \n export default { state: ${jsonLabelStr}}`;
    const filePathLabel = path.join(path.dirname(__dirname), 'src', 'store', 'modules', 'dictLabel.js');
    fs.writeFile(filePathLabel, strLabel, 'utf8', () => {
      // console.log('字典文件写入成功~');
      // console.log(`保存路径：${filePathLabel}`);
    });
  });
});
