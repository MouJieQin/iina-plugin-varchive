#!/bin/bash

rm -rf .parcel-cache dist && parcel build .
# cp ui/sidebar/video.html dist/ui/sidebar/video.html
# ps -ef | grep -i iina | grep -v grep | awk '{print $2}' | xargs -I {} kill -15 {}
rm -rf "$HOME/Library/Application Support/com.colliderli.iina/plugins/com.varchive.iina-plugin.iinaplugin/*"
for f in $(ls | grep -v node_modules); do
    cp -r "$f" "$HOME/Library/Application Support/com.colliderli.iina/plugins/com.varchive.iina-plugin.iinaplugin/"
done
open "$HOME/Downloads/thunder/银魂 Gintama 001-316全 720p 1080p MKV 中字/001-252 720p/银魂 Gintama132 720p 中字.mkv" -a "$HOME/Library/Application Support/varchive/fileManager/config/IINA.app"
sleep 3
osascript -e 'tell application "System Events" to tell process "IINA" to set frontmost to true'
