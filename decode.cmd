@echo off
echo "This script will decode .pck files to .wav"
set /p args="Enter option arguments (enter for default): "
call node decode.js %args%
echo "Completed decoding audio!, you may find the output in the output folder"
pause
