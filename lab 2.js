//  Створення області та визначення потрапляння точки
function isPointInRegion(x, y) {
    // Уявімо, що область обмежена трьома фігурами:
    // 1. Коло з радіусом 5 (центр (0, 0))
    // 2. Прямокутник з вершинами (3, 3) і (-3, -3)
    // 3. Трикутник з вершинами (0, 5), (5, -5), (-5, -5)
  
    // Перевірка на потрапляння в коло
    const isInCircle = (x ** 2 + y ** 2) <= 25;
  
    // Перевірка на потрапляння в прямокутник
    const isInRectangle = x >= -3 && x <= 3 && y >= -3 && y <= 3;
  
    // Перевірка на потрапляння в трикутник (за допомогою обчислення площі)
    const area1 = 0.5 * Math.abs((0 - 5) * (y - (-5)) - (x - (-5)) * (5 - (-5)));
    const area2 = 0.5 * Math.abs((x - 5) * (5 - (-5)) - (0 - (-5)) * (y - (-5)));
    const area3 = 0.5 * Math.abs((x - (-5)) * (y - 5) - (5 - (-5)) * (5 - y));
    const totalArea = 0.5 * Math.abs((5 - (-5)) * (5 - (-5)) - (5 - (-5)) * (5 - (-5)));
    const isInTriangle = area1 + area2 + area3 === totalArea;
  
    // Виведення результату
    if (isInCircle && isInRectangle && isInTriangle) {
      console.log("Ти потрапив в область! Тепліше!");
    } else {
      console.log("Ти поза областю! Холодніше.");
    }
  }
  
  // Приклад виклику
  isPointInRegion(2, 2); // Заміни на будь-які координати точки
  
  
  //  Обробка послідовності чисел
  function processNumbers(numbers) {
    const result = numbers.filter(num => Math.floor(num / 10) !== 9); // Перевіряємо, чи не є старша цифра 9
    console.log('Числа, де найстарша цифра не 9:', result);
  }
  
  // Приклад виклику
  processNumbers([923, 345, 87, 991, 124, 9]); // Заміни на свою послідовність чисел
  
  
  //  Сортування індексів чисел за сумою цифр (Bubble Sort)
  function sumOfDigits(num) {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  function bubbleSortBySumOfDigits(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (sumOfDigits(arr[j]) < sumOfDigits(arr[j + 1])) {
          // Обмін місцями елементів
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  // Приклад виклику
  const numbersToSort = [2413, 123, 456, 789, 982];
  const sortedNumbers = bubbleSortBySumOfDigits(numbersToSort);
  console.log('Відсортовані числа за сумою цифр (спадання):', sortedNumbers);