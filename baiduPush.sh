
###
 # @Date: 2021-11-09 16:32:13
 # @LastEditors: 曾令宇
 # @LastEditTime: 2021-11-09 16:48:16
 # @FilePath: /zly981026.github.io/baiduPush.sh
### 

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://diaz-zeng.github.io&token=2EtkL1msI2SeyZ0Y"

rm -rf urls.txt # 删除文件
