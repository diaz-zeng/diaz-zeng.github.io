
###
 # @Date: 2021-11-09 16:32:13
 # @LastEditors: 曾令宇
 # @LastEditTime: 2021-11-17 15:38:38
 # @FilePath: /diaz-zeng.github.io/baiduPush.sh
### 

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
node utils/baiduPush.js $1

curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site="+$1"&token="$2

rm -rf urls.txt # 删除文件
