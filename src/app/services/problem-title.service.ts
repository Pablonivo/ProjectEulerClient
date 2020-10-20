import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProblemTitleService {

    constructor() { }

    getProblemTitleById(problemId: number): string {
        switch (problemId) {
            case 1:
                return 'Multiples of 3 and 5';
            case 2:
                return 'Even Fibonacci numbers';
            case 3:
                return 'Largest prime factor';
            case 4:
                return 'Largest palindrome product';
            case 5:
                return 'Smallest multiple';
            case 6:
                return 'Sum square difference';
            case 7:
                return '10001st prime';
            case 8:
                return 'Largest product in a series';
            case 9:
                return 'Special Pythagorean triplet';
            case 10:
                return 'Summation of primes';
            case 11:
                return 'Largest product in a grid';
            case 12:
                return 'Highly divisible triangular number';
            case 13:
                return 'Large sum';
            case 14:
                return 'Longest Collatz sequence';
            case 15:
                return 'Lattice paths';
            case 16:
                return 'Power digit sum';
            case 17:
                return 'Number letter counts';
            case 18:
                return 'Maximum path sum I';
            case 19:
                return 'Counting Sundays';
            case 20:
                return 'Factorial digit sum';
            case 21:
                return 'Amicable numbers';
            case 22:
                return 'Names scores';
            case 23:
                return 'Non-abundant sums';
            case 24:
                return 'Lexicographic permutations';
            case 25:
                return '1000-digit Fibonacci number';
            case 26:
                return 'Reciprocal cycles';
            case 27:
                return 'Quadratic primes';
            case 28:
                return 'Number spiral diagonals';
            case 29:
                return 'Distinct powers';
            case 30:
                return 'Digit fifth powers';
            case 31:
                return 'Coin sums';
            case 32:
                return 'Pandigital products';
            case 33:
                return 'Digit cancelling fractions';
            case 34:
                return 'Digit factorials';
            case 35:
                return 'Circular primes';
            case 36:
                return 'Double-base palindromes';
            case 37:
                return 'Truncatable primes';
            case 38:
                return 'Pandigital multiples';
            case 39:
                return 'Integer right triangles';
            case 40:
                return 'Champernowne\'s constant';
            case 41:
                return 'Pandigital prime';
            case 42:
                return 'Coded triangle numbers';
            case 43:
                return 'Sub-string divisibility';
            case 44: 
                return 'Pentagon numbers';
            case 45:
                return 'Triangular, pentagonal, and hexagonal';
            case 67:
                return 'Maximum path sum II';
            default:
                return 'Not yet implemented'
        }
    }
}