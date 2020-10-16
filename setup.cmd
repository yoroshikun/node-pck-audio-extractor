@echo off
echo "Installing deps, this may take a little while..."
mkdir %cd%/libs
git clone https://github.com/yoroshikun/node-pck-audio-extractor-deps-installer.git deps
cd deps
yarn install
node setup.js
copy %cd%/libs/* %cd%/../libs
cd ..
rmdir /s /q %cd%/deps
echo "Completed installing deps, you may now run 'node decode.js' to start decoding audio!"
pause
