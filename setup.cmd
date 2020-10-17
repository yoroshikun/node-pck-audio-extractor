@echo off
echo "Installing deps, this may take a little while..."
call yarn install
if not exist %CD%\libs md %CD%\libs
if not exist %CD%\deps call git clone https://github.com/yoroshikun/node-pck-audio-extractor-deps-installer.git deps
cd deps
call yarn install
call node setup.js
robocopy /s /e /xo %CD%\libs %CD%\..\libs /njh /njs /ndl /nc /ns
cd ..
rmdir /s /q %CD%\deps
echo "Completed installing deps, you may now run 'decode.cmd' to start decoding audio!"
pause
