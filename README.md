## Deploy para o firebase

Estando a máquina já configurada para fazer o deploy, executar os comandos abaixo:

1 - npm run build
2 - firebase login:ci
3 - Ele vai gerar um token, utilizar esse token nos comandos firebase.
4 - Executar o comando para o deploy
		Exemplo: firebase deploy --token "$FIREBASE_TOKEN"
		Exemplo: firebase deploy --token 1//0h0jggiwrjxbgCgYIARAAGBESNwF-L9IrpTcGId6Iwv3Z5CiqherqqeNZeWKnF1khUkIn1cYVX_L_lEqpLnT0LHeBcP0JsuRiy-o

Link de referência para fazer a configuração na máquina para executar o deploy:
https://medium.com/naminhamaquinafunciona/desenvolvendo-um-projeto-com-reactjs-do-zero-ao-deploy-part-7-firebase-deploy-3daf3b896d7b
