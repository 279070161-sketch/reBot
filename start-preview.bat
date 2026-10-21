@echo off
REM reBot static site preview server ? starts http://localhost:4173/
set PORT=4173
netstat -ano | findstr /R ":%PORT% .*LISTENING" >nul 2>&1
if %errorlevel%==0 (
  echo [preview] port %PORT% is already in use -- server already running?
  start "" "http://localhost:%PORT%/"
  exit /b 0
)
echo [preview] starting server for %~dp0 at http://localhost:%PORT%/
start "reBot Preview %PORT%" cmd /c "node "%~dp0preview-server.js" "%~dp0." %PORT%"
timeout /t 2 /nobreak >nul
start "" "http://localhost:%PORT%/"
