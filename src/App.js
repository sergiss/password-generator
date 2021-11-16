import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import PasswordForm from "./components/PasswordForm";
import PasswordView from "./components/PasswordView";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = `~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`;

const includes = (a, b) => {
  for(let i = 0; i < b.length; ++i) {
    if(a.includes(b.charAt(i))) {
      return true;
    }
  }
  return false;
}

const check = (pwd, options) => {  
  if(options.lowercase && !includes(pwd, ALPHABET)) {
    return false;
  }
  if(options.uppercase && !includes(pwd, ALPHABET.toUpperCase())) {
    return false;
  }
  if(options.numbers   && !includes(pwd, NUMBERS)) {
    return false;
  }
  if(options.symbols   && !includes(pwd, SYMBOLS)) {
    return false;
  }
  return true;
};

function App() {

  const [password, setPassword] = useState("");
  const [options, setOptions] = useState(()=> {
    const data = localStorage.getItem("password_options");
    if(data) {
      return JSON.parse(data);
    }
    return {
      length: 25,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true
    }
  });

  useEffect(() => {
    
    const { length, uppercase, lowercase, numbers, symbols } = options;

    if(!uppercase && !lowercase && !numbers && !symbols) {
      setOptions({
        ...options,
        lowercase:true
      })
      return;
    }

    let values = "";
    if (uppercase) {
      values += ALPHABET.toUpperCase();
    }

    if (lowercase) {
      values += ALPHABET;
    }

    if (numbers) {
      values += NUMBERS;
    }

    if (symbols) {
      values += SYMBOLS;
    }

    let pwd = '';
    if (values.length > 0) {
      do {
        pwd = '';
        for (let index, i = 0; i < length; ++i) {
          index = Math.floor(Math.random() * values.length);
          pwd += values.charAt(index);
        }
      } while(pwd.length > 3 && !check(pwd, options));
    }
    setPassword(pwd);
    window.localStorage.setItem("password_options", JSON.stringify(options));

  }, [options]);

  const generate = () => {
    setOptions({
      ...options
    });
  };

  const computeScore = (password, options) => {
    let ml = 9 / ( (options.lowercase ? 0.33 : 0) + (options.uppercase ? 0.33 : 0) + (options.numbers ? 0.33 : 0) + (options.symbols ? 0.33 : 0));
    let cl = Math.max(0, Math.min(password.length - 3, ml));
    return (cl * 100) / ml;
  };

  return (
    <Fragment>
      <Header />
      <div className="container">
        <PasswordView
          password={password}
          score={computeScore(password, options)}
          generate={generate}
        />
        <PasswordForm options={options} setOptions={setOptions} />
      </div>
    </Fragment>
  );
}

export default App;
