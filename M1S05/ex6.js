let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];
frutas.forEach((fruta) => localStorage.setItem(frutas.indexOf(fruta), fruta));
