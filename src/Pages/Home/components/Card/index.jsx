import { CardContent, PopUp } from "./styles";
import Bandeira from "../../../../assets/bandeira.svg";
import Cartao from "../../../../assets/cartao.svg";
import Question from "../../../../assets/Question.svg";
import Shield from "../../../../assets/ShieldCheck.svg";
import CreditCard from "../../../../assets/Credit-card.png";
import sucesso from "../../../../assets/sucesso.png";

import Loading from "../../../../assets/SpinnerGap.svg";
import btn from "./validity";

import { useState, useEffect } from 'react';
import showOnCard from "./mask";

export default function Card (){
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    showOnCard();
    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    return () => {
      form.removeEventListener("submit", (e) => {
        e.preventDefault();
      });
    }
  }, []);
  function handleClick() {
    setLoading(true);
  
    setTimeout(() => {
      btn();

      setLoading(false);
    }, 2000); // tempo de espera em milissegundos
  }
  return (
    <CardContent id="form" action="#">
      <div className="wrapper">
        <div className="inputs">
          <div className="input">
            <label htmlFor="Number">Número do Cartão</label>
            <input
              type="text"
              id="number"
              name="number"
              maxLength={19}
              placeholder="Número como está no cartão"
              onKeyPress={(e) => {
                const charCode = e.keyCode || e.which;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              }}
            />
            <small></small>
          </div>
          <div className="input">
            <label htmlFor="titular">Nome do Titular</label>
            <input
              type="text"
              id="titular"
              name="titular"
              placeholder="Nome como está no cartão"
              onKeyPress={(e) => {
                const charCode = e.keyCode || e.which;
                if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && charCode !== 32) {
                  e.preventDefault();
                }
              }}
            />
          </div>
          <div className="inputGroup">
            <div className="input">
              <label htmlFor="validade">Validade</label>
              <input
                type="text"
                id="validade"
                name="validade"
                placeholder="mm/aa"
                maxLength={5}
                onKeyPress={(e) => {
                  const charCode = e.keyCode || e.which;
                  if ((charCode < 48 || charCode > 57) && charCode !== 47) {
                    e.preventDefault();
                  }
                }
                }
              />
              <small></small>
            </div>
            <div className="input small">
              <label htmlFor="CVV">
                CVV{"   "}
                <img
                  src={Question}
                  alt="Clique para saber aonde se localiza o Código de verificação"
                />
              </label>
              <input type="password" name="CVV" id="CVV" placeholder="***"
              maxLength={3}
              onKeyPress={(e) => {
                const charCode = e.keyCode || e.which;
                if (charCode < 48 || charCode > 57) {
                  e.preventDefault();
                }
              }}
              />
              <small></small>
            </div>
          </div>
        </div>
        <div className="CardGroup">
          <div className="card">
            <img src={CreditCard} className="background" />
            <div className="container">
              <div className="figures">
                <img src={Bandeira} alt="Logo da visa" />
                <img
                  src={Cartao}
                  alt="ícone representando a função de aproximação"
                />
              </div>
              <div className="wrapper">
                <div className="row">
                  <div className="numbers">
                    1234 5678 9123 4567
                    
                  </div>
                </div>
                <div className="row">
                  <div className="name">Seu Nome Aqui</div>
                  <div className="validity">
                      02/20                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="alert">
            <img src={Shield} alt="Ícone de um escudo, colorido de verde" />{" "}
            Seus dados estão seguros
          </p>
        </div>
      </div>
      <button type="submit" className="btn-primary" onClick={handleClick}>
        {loading ? <img src={Loading}/> :  "Adicionar Cartão" }
      </button>
      <PopUp>
        <div className="content">
          <img src={sucesso} alt="Icone representando Sucesso na operação" />
          <h1>Cartão cadastrado</h1>
          <p>Prossiga seu cadastro no site</p>
        </div>
        <button type="button" onClick={()=>{
           document.querySelector("article").style.display="none"
        }} className="btn">ok</button>
      </PopUp>
    </CardContent>
  );
};
