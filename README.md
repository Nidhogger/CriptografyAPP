# CriptografyAPP
meu primeiro app de criptografia

```bash
# Install dependencies
npm install
# Run the app
node index.js
```

# Modo de Usar/How to use it

Como está atualmente, para usar a API é necessário fazer uma Request Get ao localhost(8080) com a rota/caminho correspondente à Criptografia desejada, todas as rotas/caminhos requerem uma Querry com as informações necessárias; por exemplo Text (a String de texto a ser criptografada) e Type (se a operação for uma Encrypt ou uma Decrypt)

 As currently stands, to use the API you need to make a Get Request to the localhost(8080) with the route/path correspondent to the desired Criptografy, all route's/path's require a Query with the necessary information; for exemple Text(the Text String to be encrypted) and Type(if the operation is a Encrypt or a Decrypt)

# Route's/Path's

Aqui está uma lista das Rotas/Caminhos e os requisitos de cada um.

 Here is a list of the Routes/Paths and the requirements of each one.

# Binary

Binary requer uma querry com text (a string de texto a ser criptografada ou descriptografada, qualquer coisa além de letras será removida) e type (se a operação for uma Encrypt ou Decrypt).

 Binary require a querry with text(the text string to be Encrypted or Decrypted, anything besides letters will be removed) and type(if the operation is a Encrypt or a Decrypt) parameters

# CaesarCipher

CaesarCipher requer uma querry com text (a string de texto a ser criptografada ou descriptografada, qualquer coisa além de letras será removida), direction (isso deve ser igual à left ou à right) e key (isso deve ser um número).

 CaesarCipher require a querry with text(the text string to be Encrypted or Decrypted, anything besides letters will be removed), direction(this must be equal either to left or right) and key(this must be a number) parameters

# VigenereCipher

VigenereCipher requer uma querry com text (a string de texto a ser criptografada ou descriptografada, qualquer coisa além de letras será removida), direção (isso deve ser igual à left ou à right) e key (deve ser uma string de texto, que funciona como senha).

 VigenereCipher require a querry with text(the text string to be Encrypted or Decrypted, anything besides letters will be removed), direction(this must be equal either to left or right) and key(must be a text String, that functions as password) parameters

# AutokeyCipher

AutokeyCipher requer uma querry com text (a string de texto a ser criptografada ou descriptografada, qualquer coisa além de letras será removida), type (se a operação for uma Encrypt ou Decrypt) e key (caso as operações solicitadas sejam uma descriptografia de uma key é necessário, que deve ser uma palavra, Uma key pode ser fornecida em uma Criptografia também, embora não seja um requisito. Caso um Texto seja criptografado sem uma key, a primeira palavra do texto funciona como key para Descriptografia, caso contrário, use o mesma key fornecida durante Criptografar para descriptografar o texto).

 AutokeyCipher require a querry with text(the text string to be Encrypted or Decrypted, anything besides letters will be removed), type(if the operation is a Encrypt or a Decrypt) and key(in case the operations been requested is a Decrypt a Key is required, which must be a word, A key can be provided in a Encrypt as well while is not a requirement. in case a Text is encrypted without a Key, the first word of the text works as key for it's Decrypt otherwise use the same key provided during Encrypt to decrypt the text) parameters

# PolybiusSquare

PolybiusSquare requer uma querry com text (a string de texto a ser criptografada ou descriptografada, qualquer coisa além de letras será removida) e type (se a operação for uma Encrypt ou Decrypt).

 PolybiusSquare require a querry with text(the text string to be Encrypted or Decrypted, anything besides letters will be removed) and type(if the operation is a Encrypt or a Decrypt) parameters

# NihilistCipher

NihilistCipher requer uma querry com text (a string de texto a ser criptografada ou descriptografada, qualquer coisa além de letras será removida), type (se a operação for uma Encrypt ou Decrypt) e key (deve ser uma palavra).

 NihilistCipher require a querry with text(the text string to be Encrypted or Decrypted, anything besides letters will be removed), type(if the operation is a Encrypt or a Decrypt) and key(must be a word) parameters