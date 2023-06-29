document.getElementById("btn-input").value = 0;
let simbComa = 0;
let operacion = [];
let longitudOperacion = "";
let posicion = 0;
let opAcabada = false;
let total = 0;

const valor = () => {
  let input = document.getElementById("btn-input").value;
  if (input.value == "") {
    input = "";
  }
  return input;
};
const uno = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 1;
      longitudOperacion = longitudOperacion + 1;
    } else {
      document.getElementById("btn-input").value = inValor + 1;
      longitudOperacion = longitudOperacion + 1;
    }
  } else {
    console.log("de suma");
    document.getElementById("btn-input").value = 1;
    longitudOperacion = longitudOperacion + 1;
    opAcabada = true;
  }
};
const dos = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 2;
      longitudOperacion = longitudOperacion + 2;
    } else {
      document.getElementById("btn-input").value = inValor + 2;
      longitudOperacion = longitudOperacion + 2;
    }
  } else {
    document.getElementById("btn-input").value = 2;
    longitudOperacion = longitudOperacion + 2;
    opAcabada = true;
  }
};
const tres = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 3;
      longitudOperacion = longitudOperacion + 3;
    } else {
      document.getElementById("btn-input").value = inValor + 3;
      longitudOperacion = longitudOperacion + 3;
    }
  } else {
    document.getElementById("btn-input").value = 3;
    longitudOperacion = longitudOperacion + 3;
    opAcabada = true;
  }
};
const cuatro = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 4;
      longitudOperacion = longitudOperacion + 4;
    } else {
      document.getElementById("btn-input").value = inValor + 4;
      longitudOperacion = longitudOperacion + 4;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 4;
    longitudOperacion = longitudOperacion + 4;
  }
};
const cinco = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 5;
      longitudOperacion = longitudOperacion + 5;
    } else {
      document.getElementById("btn-input").value = inValor + 5;
      longitudOperacion = longitudOperacion + 5;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 5;
    longitudOperacion = longitudOperacion + 5;
  }
};
const seis = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 6;
      longitudOperacion = longitudOperacion + 6;
    } else {
      document.getElementById("btn-input").value = inValor + 6;
      longitudOperacion = longitudOperacion + 6;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 6;
    longitudOperacion = longitudOperacion + 6;
  }
};
const siete = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 7;
      longitudOperacion = longitudOperacion + 7;
    } else {
      document.getElementById("btn-input").value = inValor + 7;
      longitudOperacion = longitudOperacion + 7;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 7;
    longitudOperacion = longitudOperacion + 7;
  }
};
const ocho = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 8;
      longitudOperacion = longitudOperacion + 8;
    } else {
      document.getElementById("btn-input").value = inValor + 8;
      longitudOperacion = longitudOperacion + 8;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 8;
    longitudOperacion = longitudOperacion + 8;
  }
};
const nueve = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 9;
      longitudOperacion = longitudOperacion + 9;
    } else {
      document.getElementById("btn-input").value = inValor + 9;
      longitudOperacion = longitudOperacion + 9;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 9;
    longitudOperacion = longitudOperacion + 9;
  }
};
const cero = () => {
  let inValor = valor();
  if (opAcabada) {
    opAcabada = true;
    if (inValor == 0 && simbComa == 0) {
      document.getElementById("btn-input").value = 0;
      longitudOperacion = longitudOperacion + 0;
    } else {
      document.getElementById("btn-input").value = inValor + 0;
      longitudOperacion = longitudOperacion + 0;
    }
  } else {
    opAcabada = true;
    document.getElementById("btn-input").value = 0;
    longitudOperacion = longitudOperacion + 0;
  }
};
//----------------------------
const reset = () => {
  document.getElementById("btn-input").value = 0;
  simbComa = 0;
  operacion = [];
  longitudOperacion = "";
  posicion = 0;
};
//----------------------------
const dividir = () => {
  let inValor = valor();
  let long = String(inValor).length - 1;
  if (opAcabada) {
    opAcabada = true;
    if (long == 0 && simbComa < 1) {
      operacion[posicion] = longitudOperacion;
      longitudOperacion = "";
      posicion++;
      document.getElementById("btn-input").value = inValor + "/";
      operacion[posicion] = "/";
      posicion++;
    } else {
      if (
        inValor[long] != "/" &&
        inValor[long] != "X" &&
        inValor[long] != "-" &&
        inValor[long] != "+" &&
        inValor[long] != "."
      ) {
        operacion[posicion] = longitudOperacion;
        longitudOperacion = "";
        posicion++;
        document.getElementById("btn-input").value = inValor + "/";
        operacion[posicion] = "/";
        posicion++;
        simbComa = 0;
      }
    }
  } else {
    operacion[posicion] = longitudOperacion;
    longitudOperacion = "";
    posicion++;
    document.getElementById("btn-input").value = inValor + "/";
    operacion[posicion] = "/";
    posicion++;
  }
};
const mult = () => {
  let inValor = valor();
  let long = String(inValor).length - 1;
  if (opAcabada) {
    opAcabada = true;
    if (long == 0 && simbComa < 1) {
      operacion[posicion] = longitudOperacion;
      longitudOperacion = "";
      posicion++;
      document.getElementById("btn-input").value = inValor + "X";
      operacion[posicion] = "X";
      posicion++;
    } else {
      if (
        inValor[long] != "/" &&
        inValor[long] != "X" &&
        inValor[long] != "-" &&
        inValor[long] != "+" &&
        inValor[long] != "."
      ) {
        operacion[posicion] = longitudOperacion;
        longitudOperacion = "";
        posicion++;
        document.getElementById("btn-input").value = inValor + "X";
        operacion[posicion] = "X";
        posicion++;
        simbComa = 0;
      }
    }
  } else {
    opAcabada = true;
    operacion[posicion] = longitudOperacion;
    longitudOperacion = "";
    posicion++;
    document.getElementById("btn-input").value = inValor + "X";
    operacion[posicion] = "X";
    posicion++;
  }
};
const resta = () => {
  let inValor = valor();
  let long = String(inValor).length - 1;
  if (opAcabada) {
    opAcabada = true;
    if (long == 0 && simbComa < 1) {
      operacion[posicion] = longitudOperacion;
      longitudOperacion = "";
      posicion++;
      document.getElementById("btn-input").value = inValor + "-";
      operacion[posicion] = "-";
      posicion++;
    } else {
      if (
        inValor[long] != "/" &&
        inValor[long] != "X" &&
        inValor[long] != "-" &&
        inValor[long] != "+" &&
        inValor[long] != "."
      ) {
        operacion[posicion] = longitudOperacion;
        longitudOperacion = "";
        posicion++;
        document.getElementById("btn-input").value = inValor + "-";
        operacion[posicion] = "-";
        posicion++;
        simbComa = 0;
      }
    }
  } else {
    opAcabada = true;
    operacion[posicion] = longitudOperacion;
    longitudOperacion = "";
    posicion++;
    document.getElementById("btn-input").value = inValor + "-";
    document.getElementById("btn-input").value = inValor + "-";
    operacion[posicion] = "-";
    posicion++;
  }
};
const suma = () => {
  let inValor = valor();
  let long = String(inValor).length - 1;
  if (opAcabada) {
    opAcabada = true;
    if (long == 0 && simbComa < 1) {
      operacion[posicion] = longitudOperacion;
      longitudOperacion = "";
      posicion++;
      document.getElementById("btn-input").value = inValor + "+";
      operacion[posicion] = "+";
      posicion++;
    } else {
      if (
        inValor[long] != "/" &&
        inValor[long] != "X" &&
        inValor[long] != "-" &&
        inValor[long] != "+" &&
        inValor[long] != "."
      ) {
        operacion[posicion] = longitudOperacion;
        longitudOperacion = "";
        posicion++;
        document.getElementById("btn-input").value = inValor + "+";
        operacion[posicion] = "+";
        posicion++;
        simbComa = 0;
      }
    }
  } else {
    opAcabada = true;
    operacion[posicion] = longitudOperacion;
    longitudOperacion = "";
    posicion++;
    document.getElementById("btn-input").value = inValor + "+";
    operacion[posicion] = "+";
    posicion++;
  }
};
//----------------------------
const coma = () => {
  let inValor = valor();
  let long = String(inValor).length - 1;
  if (long == 0 && simbComa < 1) {
    document.getElementById("btn-input").value = inValor + ".";
    simbComa++;
  } else {
    if (
      inValor[long] != "/" &&
      inValor[long] != "X" &&
      inValor[long] != "-" &&
      inValor[long] != "+" &&
      inValor[long] != "." &&
      simbComa == 0
    ) {
      document.getElementById("btn-input").value = inValor + ".";
      simbComa++;
    }
  }
};
//----------------------------
const igual = () => {
  let inValor = valor();
  if (inValor == 0) {
    document.getElementById("btn-input").value = 0;
  }
  operacion[posicion] = longitudOperacion;
  let i = 1;
  while (i < operacion.length) {
    if (operacion[i] == "+") {
      total = Math.floor(operacion[i - 1]) + Math.floor(operacion[i + 1]);
      operacion[i + 1] = total;
    }
    if (operacion[i] == "-") {
      total = Math.floor(operacion[i - 1]) - Math.floor(operacion[i + 1]);
      operacion[i + 1] = total;
    }
    if (operacion[i] == "X") {
      total = Math.floor(operacion[i - 1]) * Math.floor(operacion[i + 1]);
      operacion[i + 1] = total;
    }
    if (operacion[i] == "/") {
      total = Math.floor(operacion[i - 1]) / Math.floor(operacion[i + 1]);
      operacion[i + 1] = total;
    }
    i = i + 2;
    console.log(operacion);
  }
  console.log("resultado: " + total);
  document.getElementById("btn-input").value = total;
  opAcabada = false;
  operacion = [];
  operacion[0] = total;
  //--------
  longitudOperacion = total;
  posicion = 0;
  simbComa = 0;
};
