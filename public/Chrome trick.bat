@echo off
echo =========[ Chrome Full Fresh Reset ]=========

:: Step 1: Kill Chrome if running (needed to clear cookies, cache, history)
echo Closing Chrome processes...
taskkill /F /IM chrome.exe /T

:: Step 2: Define Chrome User Data Path
set "chrome_data=%LOCALAPPDATA%\Google\Chrome\User Data"

:: Step 3: Backup Old Profile (optional, safe)
echo Backing up existing profile...
mkdir "%chrome_data%\BackupProfile"
xcopy "%chrome_data%\Default" "%chrome_data%\BackupProfile" /s /e /h /y >nul

:: Step 4: Delete Default Profile (this removes cookies, history, cache, downloads, autofill everything)
echo Deleting old user profile...
rmdir /s /q "%chrome_data%\Default"

:: Step 5: Create New Clean Profile
echo Creating new clean profile...
mkdir "%chrome_data%\Default"

:: Step 6: Launch Chrome Fresh
echo Launching Chrome fresh...
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe"

echo =================================================
echo All done! Chrome is now fresh like new.
pause
exit
