@echo off
title Enviando Atualizações do Portfólio para o GitHub...
echo ========================================================
echo   PUBLICANDO PORTFOLIO NO GITHUB
echo   Autor: Anderson Nataniel Mendes Ferreira
echo   Repositorio: https://github.com/andersnatanielferreira-bot/portfolio
echo ========================================================
echo.

set PATH=%LOCALAPPDATA%\Programs\Git\cmd;C:\Program Files\Git\cmd;%PATH%

git status
echo.
echo Sincronizando com o GitHub...
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCESSO! O PORTFOLIO FOI ATUALIZADO NO GITHUB COM EXITO!
    echo   Repositorio: https://github.com/andersnatanielferreira-bot/portfolio
    echo   Site Online: https://andersnatanielferreira-bot.github.io/portfolio/
    echo ========================================================
) else (
    echo.
    echo Ocorreu um erro no envio. Verifique a conexao a internet.
)

echo.
pause
