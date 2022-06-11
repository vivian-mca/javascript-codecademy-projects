<h1 align="center">Challenge Project: Mysterious Organism</h1>

## Table of contents <!-- omit in toc -->
- [Overview](#overview)
  - [About](#about)
  - [Project Goals](#project-goals)
  - [Tasks](#tasks)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)
- [Status](#status)
- [Contributing](#contributing)

## Overview

### About

Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project to be built.

### Project Goals

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, *Pila aequor* (*P. aequor*), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make *P. aequor* an interesting specimen to study. However, *P. aequor* cannot survive above sea level and locating *P. aequor* in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of *P. aequor* for your research team to study.

### Tasks

1. Create a factory function `pAequorFactory()` that returns an object that contains the properties `specimenNum` and `dna` that correspond to the parameters provided.
2. Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA). To simulate a mutation, create a method (`.mutate()`) that is responsible for randomly selecting a base in the object’s `dna` property and changing the current base to a different base. Then `.mutate()` will return the object’s dna. For example, if the randomly selected base is the 1st base and it is `A`, the base must be changed to `T`, `C`, or `G`. But it cannot be `A` again.
3. Your research team wants to be able to compare the DNA sequences of different *P. aequor*. Add a method (`.compareDNA`) to compare the current *pAequor*‘s .`dna` with the passed in *pAequor*‘s `.dna` and compute how many bases are identical and in the same locations and prints the percentage of DNA the two specimens have in common.
4. Add a method that checks the likely chance of survival based on whether the specimen's DNA is made up of at least 60% `C` or `G` bases.
5. Create 30 instances of *pAequor* that can survive in their natural environment and store in an array for your team to study later.

## My process

### Built with

- vanilla JavaScript

### What I learned

This project proved to be difficult on my first try. This was a good practice for iterator methods and constructing factory functions. I learned to implement `.splice()` and `.toFixed()`.

## Useful resources 

- [MDN Web Docs | Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
- [MDN Web Docs | Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) - formats a number using fixed-point notation.

## Status

 :white_check_mark: Completed

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

I am open for code reviews! Any tips and/or feedback are greatly appreciated! Please help me git gud.
