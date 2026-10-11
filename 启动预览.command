#!/bin/zsh

cd "$(dirname "$0")" || exit 1

preview_url="http://127.0.0.1:8787/index.html"
printf '\nJoyce 网页本地预览\n\n打开浏览器，访问：%s\n\n' "$preview_url"

if curl --fail --silent --max-time 2 "$preview_url" > /dev/null; then
  printf '预览服务已经运行，可以直接打开上面的地址。\n'
  printf '按回车关闭这个窗口。'
  read -r
  exit 0
fi

printf '预览期间请保留此窗口；按 Control+C 停止服务。\n\n'
python3 -m http.server 8787 --bind 127.0.0.1 --directory "$PWD"
