export const numberToNepaliText = (number: number) => {
  const nepaliDigits = [
    "शुन्य",
    "एक",
    "दुई",
    "तीन",
    "चार",
    "पाँच",
    "छ",
    "सात",
    "आठ",
    "नौ",
    "दश",
    "एघार",
    "बाह्र",
    "तेह्र",
    "चौध",
    "पन्ध्र",
    "सोह्र",
    "सत्र",
    "अठार",
    "उन्नाइस",
    "बीस",
    "एक्काइस",
    "बाइस",
    "तेइस",
    "चौबीस",
    "पच्चीस",
    "छब्बीस",
    "सत्ताइस",
    "अठ्ठाइस",
    "उनन्तीस",
    "तीस",
    "एकतीस",
    "बत्तीस",
    "तैंतीस",
    "चौंतीस",
    "पैंतीस",
    "छत्तीस",
    "सैंतीस",
    "अठतीस",
    "उनन्चालीस",
    "चालीस",
    "एकचालीस",
    "बयालीस",
    "त्रियालीस",
    "चवालीस",
    "पैंतालीस",
    "छियालीस",
    "सत्चालीस",
    "अठचालीस",
    "उनन्चास",
    "पचास",
    "एकाउन्न",
    "बाउन्न",
    "त्रिपन्न",
    "चवन्न",
    "पाँचाउन्न",
    "छपन्न",
    "सत्ताउन्न",
    "अठाउन्न",
    "उनन्साठी",
    "साठी",
    "एकसठी",
    "बासठी",
    "त्रिसठी",
    "चौंसठी",
    "पैंसठी",
    "छियासठी",
    "सत्तासठी",
    "अठासठी",
    "उनन्सत्तरी",
    "सत्तरी",
    "एकहत्तर",
    "बहत्तर",
    "त्रिहत्तर",
    "चौंहत्तर",
    "पैंहत्तर",
    "छियात्तर",
    "सत्ताहत्तर",
    "अठाहत्तर",
    "उनासी",
    "असी",
    "एकासी",
    "बासी",
    "त्रियासी",
    "चौरासी",
    "पचासी",
    "छियासी",
    "सत्तासी",
    "अठासी",
    "उनन्नब्बे",
    "नब्बे",
    "एकान्नब्बे",
    "बान्नब्बे",
    "त्रियान्नब्बे",
    "चौरान्नब्बे",
    "पचान्नब्बे",
    "छियान्नब्बे",
    "सत्तान्नब्बे",
    "अठान्नब्बे",
    "उनन्सय",
    "सय",
  ];

  function convertLessThanThousand(num: number): string {
    if (num === 0) {
      return "";
    } else if (num <= 100) {
      return nepaliDigits[num];
    } else {
      return (
        nepaliDigits[Math.floor(num / 100)] +
        " सय " +
        convertLessThanThousand(num % 100)
      );
    }
  }

  function convertMoreThanThousand(num: number): string {
    if (num < 1000) {
      return convertLessThanThousand(num);
    } else {
      const divisor =
        num < 100000000000
          ? num < 1000000000
            ? num < 10000000
              ? num < 100000
                ? 1000
                : 100000
              : 10000000
            : 1000000000
          : 100000000000;
      return (
        convertLessThanThousand(Math.floor(num / divisor)) +
        (num < 100000000000
          ? num < 1000000000
            ? num < 10000000
              ? num < 100000
                ? " हजार "
                : " लाख "
              : " करोड़ "
            : " अरब "
          : " खरब ") +
        convertMoreThanThousand(num % divisor)
      );
    }
  }

  if (number === 0) {
    return "शुन्य";
  } else {
    return convertMoreThanThousand(number);
  }
};
