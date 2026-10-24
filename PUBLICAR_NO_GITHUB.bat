@echo off
title Enviando Portfólio para o GitHub...
echo ========================================================
echo   PUBLICANDO PORTFOLIO NO GITHUB
echo   Autor: Anderson Nataniel Mendes Ferreira
echo   Repositorio: https://github.com/andersnatanielferreira-bot/portfolio
echo ========================================================
echo.

set PATH=%LOCALAPPDATA%\Programs\Git\cmd;C:\Program Files\Git\cmd;%PATH%

git status
echo.
echo Enviando branch main para o GitHub...
echo (Se solicitado, autorize pelo navegador ou insira as credenciais)
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCESSO! O PORTFOLIO FOI PUBLICADO NO GITHUB COM EXITO!
    echo   Acesse: https://github.com/andersnatanielferreira-bot/portfolio
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   AVISO: Verifique se o repositorio 'portfolio' ja foi
    echo   criado na sua conta do GitHub:
    echo   https://github.com/new
    echo ========================================================
)

echo.
pause
