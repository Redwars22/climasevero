/**
 * Converts a temperature value from Fahrenheit to Celsius.
 *
 * @param {number} fahrenheit - The temperature value in Fahrenheit.
 * @returns {number} The temperature value in Celsius.
 */

function fahrenheitToCelsius(fahrenheit: number): number {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}
