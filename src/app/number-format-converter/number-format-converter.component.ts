import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-number-format-converter',
    templateUrl: './number-format-converter.component.html',
    styleUrls: ['./number-format-converter.component.css']
})
export class NumberFormatConverterComponent implements OnInit {

    binaryFormat: string = "";
    decimalFormat: string = "";
    hexadecimalFormat: string = "";

    binaryWithSpaces: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    decimalToBinary(inputString: string) {
        /** Returns the binary format of the input decimal-format input number */

        // Convert the input decimal number from string to number
        let decimalNumber = +inputString;

        // Check if number is 0
        if (decimalNumber == 0) {
            this.binaryFormat = "0000"
            this.formatBinaryWithSpaces(this.binaryFormat);
            return this.binaryFormat
        }

        /** Converting to binary */

        let binaryFormat: string = "";
        let binaryDigitList: string[] = [];
        let decimalPlaceholder = decimalNumber;

        // Get the binary digits in an array
        while (decimalPlaceholder != 0) {
            if (decimalPlaceholder % 2 == 0) {
                binaryDigitList.push("0");
            }
            else {
                binaryDigitList.push("1");
            }
            decimalPlaceholder = Math.floor(decimalPlaceholder / 2);
        }

        // Add zeros to the beginning of the string to make the string a multiple of four
        while ((binaryFormat.length + binaryDigitList.length) % 4 != 0) {
                binaryFormat += "0";
        }

        // Form the string of the binary digits from the array of binary digits
        for (let i = binaryDigitList.length - 1; i >= 0; i--) {
                binaryFormat += binaryDigitList[i];
        }

        this.binaryFormat = binaryFormat;

        return binaryFormat;
    }

    hexadecimalToBinary(inputString: string) {
        /** Returns the binary format of the input hexadecimal-format number */

        let binaryFormat: string = "";

        for (let i = 0; i < inputString.length; i++) {
            switch (inputString.charAt(i).toLowerCase()) {
                case "0": {binaryFormat += "0000"; break;}
                case "1": {binaryFormat += "0001"; break;}
                case "2": {binaryFormat += "0010"; break;}
                case "3": {binaryFormat += "0011"; break;}
                case "4": {binaryFormat += "0100"; break;}
                case "5": {binaryFormat += "0101"; break;}
                case "6": {binaryFormat += "0110"; break;}
                case "7": {binaryFormat += "0111"; break;}
                case "8": {binaryFormat += "1000"; break;}
                case "9": {binaryFormat += "1001"; break;}
                case "a": {binaryFormat += "1010"; break;}
                case "b": {binaryFormat += "1011"; break;}
                case "c": {binaryFormat += "1100"; break;}
                case "d": {binaryFormat += "1101"; break;}
                case "e": {binaryFormat += "1110"; break;}
                case "f": {binaryFormat += "1111"; break;}
                }
        }

        this.binaryFormat = binaryFormat;

        return binaryFormat;
    }

    binaryToDecimal(inputString: string) {
        /** Returns the decimal format of the input binary-format number */

        // Add zeros to the beginning of the string to make the string a multiple of four
        let zerosString: string = "";
        while ((zerosString.length + inputString.length) % 4 != 0) {
            zerosString += "0";
        }
        inputString = zerosString + inputString;

        let decimalFormat: string;

        let decimalNumber = 0;

        for (let i = 0; i < inputString.length; i++) {
            decimalNumber += parseInt(inputString.charAt(inputString.length - i - 1)) * Math.pow(2, i);
        }

        decimalFormat = decimalNumber.toString();

        this.decimalFormat = decimalFormat;

        return decimalFormat;
    }

    binaryToHexadecimal(inputString: string) {
        /** Returns the hexadecimal format of the input binary-format number */

        // Add zeros to the beginning of the string to make the string a multiple of four
        let zerosString: string = "";
        while ((zerosString.length + inputString.length) % 4 != 0) {
            zerosString += "0";
        }
        inputString = zerosString + inputString;

        let hexadecimalFormat: string = "";

        for (let i = 0; i < inputString.length; i += 4) {
            switch (inputString.substr(i, 4)) {
                case "0001": {hexadecimalFormat += "1"; break;}
                case "0000": {hexadecimalFormat += "0"; break;}
                case "0010": {hexadecimalFormat += "2"; break;}
                case "0011": {hexadecimalFormat += "3"; break;}
                case "0100": {hexadecimalFormat += "4"; break;}
                case "0101": {hexadecimalFormat += "5"; break;}
                case "0110": {hexadecimalFormat += "6"; break;}
                case "0111": {hexadecimalFormat += "7"; break;}
                case "1000": {hexadecimalFormat += "8"; break;}
                case "1001": {hexadecimalFormat += "9"; break;}
                case "1010": {hexadecimalFormat += "a"; break;}
                case "1011": {hexadecimalFormat += "b"; break;}
                case "1100": {hexadecimalFormat += "c"; break;}
                case "1101": {hexadecimalFormat += "d"; break;}
                case "1110": {hexadecimalFormat += "e"; break;}
                case "1111": {hexadecimalFormat += "f"; break;}
                }
        }

        this.hexadecimalFormat = hexadecimalFormat;

        return hexadecimalFormat;
    }

    formatBinaryWithSpaces(binaryWithoutSpaces: string) {
        /** Adds spaces to binary format */

        let binaryWithSpaces: string = "";

        binaryWithSpaces += binaryWithoutSpaces.substr(0, 3);

        for (let i = 3; i < binaryWithoutSpaces.length; i++) {

            if (i % 4 == 0 && i != binaryWithoutSpaces.length - 1) {
                // Add a space every four digits except the last digit
                binaryWithSpaces += " ";
            }

            binaryWithSpaces += binaryWithoutSpaces.charAt(i);
        }

        this.binaryWithSpaces = binaryWithSpaces;

        return binaryWithSpaces;
    }

    fullConvert(inputNumber: string, inputFormatType: string) {
        /* Returns list of the two converted formats based on the input format.
         * The format with the lower number base will be first in the list.
         */

        let outputNumbers: string[] = ["", ""];

        if (inputFormatType == "b") {
            /** Convert from binary to decimal and hexadecimal */

            // Check if input string is empty
            if (inputNumber == "") {
                this.binaryFormat = "";
                this.binaryWithSpaces = "";
                this.decimalFormat = "";
                this.hexadecimalFormat = "";
            }
            else {
                // Remove unnecessary spaces
                this.binaryFormat = inputNumber.replace(/\s/g, "");
                // // Get the string with spaces
                // this.binaryWithSpaces = this.formatBinaryWithSpaces(this.binaryFormat);

                outputNumbers = [this.binaryToDecimal(this.binaryFormat),
                    this.binaryToHexadecimal(this.binaryFormat)];

                this.decimalFormat = outputNumbers[0];
                this.hexadecimalFormat = outputNumbers[1];
            }
        }
        else if (inputFormatType == "d") {
            /** Convert from decimal to binary and hexadecimal */

            // Check if input string is empty
            if (inputNumber == "") {
                this.decimalFormat = "";
                this.binaryFormat = "";
                this.binaryWithSpaces = "";
                this.hexadecimalFormat = "";
            }
            else {
                let binaryNumber = this.decimalToBinary(inputNumber);
                outputNumbers = [this.formatBinaryWithSpaces(binaryNumber),
                    this.binaryToHexadecimal(binaryNumber)]

                this.decimalFormat = inputNumber;
                this.binaryFormat = outputNumbers[0];
                this.hexadecimalFormat = outputNumbers[1];
            }
        }
        else if (inputFormatType == "x") {
            /** Convert from hexadecimal to binary and decimal */

            // Check if input string is empty
            if (inputNumber == "") {
                this.hexadecimalFormat = "";
                this.binaryFormat = "";
                this.binaryWithSpaces = "";
                this.decimalFormat = "";
            }
            else {
                let binaryNumber = this.hexadecimalToBinary(inputNumber);
                outputNumbers = [this.formatBinaryWithSpaces(binaryNumber),
                    this.binaryToDecimal(binaryNumber)];

                this.hexadecimalFormat = inputNumber;
                this.binaryFormat = outputNumbers[0];
                this.decimalFormat = outputNumbers[1];
            }
        }
        return outputNumbers;
    }
}
