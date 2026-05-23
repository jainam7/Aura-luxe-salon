// Formatter utilities for Canadian locale (en-CA)

// Format price in Canadian dollars
export const formatCAD = (amount: number): string =>
  new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ' CAD'; // Ensures "CA$XX CAD" or standard format

// Format date in Canadian locale
export const formatDateCA = (date: Date): string =>
  new Intl.DateTimeFormat('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date); // → "Tuesday, June 10, 2026"

// Validate Canadian postal code
export const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

// Validate Canadian phone number
export const phoneRegex = /^\+?1?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
