<div align="center">
<h1>- Mask for HTML -</h1>
A simple function for you to use in your inputs and be able to edit them according to your preference while the user is typing!
<br><br>
</div>

## Language
- [pt-BR](#pt-br) 
- [en-US](#en)  

```js
function mask(selector, mask, regex) {
    if (regex) {
        document.querySelector(selector).setAttribute('pattern', regex);
    }

    document.querySelector(selector)
    .addEventListener('keypress', () => {
        const text = document.querySelector(selector);
        addValue(mask, text.value.length, text);

    });

    function addValue(origin, now, input) {
        if (origin[now] && origin[now] !== '0') {
            input.value += origin[now];

            if (origin[now +1] && origin[now +1] !== '0') {
                addValue(origin, now +1, input);
            }
        }
    }
}
```
<span id="pt-br"> </span>
## PORTUGUÊS
### Como usar
#### A função aceita 3 parametros 
- selector (obrigatório): ID ou classe do elemento a ser editado; 
- mask (obrigatório): Padrão desejado para a edição, usando como base números zeros (0);  
- regex (opcional): Expressão Regular para ser adicionada ao pattern  
***Observação:** Se você for passar a regex como parâmetro, lembra passa-lá como string e de duplicar as `/` para que a sua string não fique "deformada".* 

### Exemplos:
---
#### Código:
```html
<body>
  <label>
    <p>CPF:</p>
    <input type="text" name="cpf" id="cpf" placeholder="Digite seu telefone (00) 00000-0000" required>
  </label>
</body>
<script>
  // cole a função aqui
  
  // //  selector       mask     regex (com as `/` duplicadas e em formato string)
  mask('#cpf', '000.000.000-00', '[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0- 9]{2}');
</script>
```
#### Resultado:   
![mask_input](https://user-images.githubusercontent.com/100722316/187559292-3d4c732d-9dfd-42bd-bd65-d56e23a26aaf.gif)     
---
#### Código:
```html
<body>
  <label>
    <p>Telefone:</p>
    <input type="text" name="telefone" class="telefone" id="telefone" placeholder="Digite seu telefone (00) 00000-0000" required>
  </label>
</body>
<script>
  // cole a função aqui
  
  //       selector        mask
  mask('.telefone', '(00)00000-0000');
</script>
```
#### Resultado:
![nask_input](https://user-images.githubusercontent.com/100722316/187569028-e175e6f9-be14-4495-8377-08259a33cc24.gif)     

*Nos dois casos eu digitei apenas os números*   

<span id="en"> </span>
## ENGLISH
### How to use
#### The function accepts 3 parameters
- selector (mandatory): ID or class of the element to be edited;
- mask (mandatory): Desired pattern for editing, using zeros (0) as a base;
- regex (optional): Regular expression to be added to the pattern   
***Note:** If you are going to pass the regex as a parameter, remember to pass it as a string and to double the `/` so that your string is not "deformed".*   

### Examples:
---
#### Code:
```html
<body>
  <label>
    <p>CPF:</p>
    <input type="text" name="cpf" id="cpf" placeholder="Digite seu telefone (00) 00000-0000" required>
  </label>
</body>
<script>
  // pastle the function here
  
  // mask regex selector (with duplicate `/` and in string format)
  mask('#cpf', '000.000.000-00', '[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0- 9]{2}');
</script>
```
#### Result:
![mask_input](https://user-images.githubusercontent.com/100722316/187559292-3d4c732d-9dfd-42bd-bd65-d56e23a26aaf.gif)     
---
#### Code:
```html
<body>
  <label>
    <p>Telefone:</p>
    <input type="text" name="phone" class="phone" id="phone" placeholder="Digite seu telefone (00) 00000-0000" required>
  </label>
</body>
<script>
  // pastle the function here

  // mask selector
  mask('.phone', '(00)00000-0000');
</script>
```
#### Result:
![nask_input](https://user-images.githubusercontent.com/100722316/187569028-e175e6f9-be14-4495-8377-08259a33cc24.gif)     

*In both cases I just typed the numbers*    

<span id="contact"> </span>
### Autor
<a href="https://github.com/Fuckners/Fuckners">
 <img src="https://avatars.githubusercontent.com/u/100722316?s=400&u=a71fc45baf666450aafd21e99aa729e48b1f1552&v=4" width="100px;"/>
 <br>
 <sub><b>Felipe Fuckner Clariano</b></sub>
</a>
 
 Entre em contato! 💌
 
[![Linkedin Badge](https://img.shields.io/badge/-Felipe%20Fuckner-blue?style=flat-square&logo=Linkedin&logoColor=white&)](https://www.linkedin.com/in/felipe-fuckner-b65a49237) 
[![Gmail Badge](https://img.shields.io/badge/-felipefclariano04@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:felipefclariano04@gmail.com)
