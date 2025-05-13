import type { Response } from 'express';
import { CustomError } from './CustomError';

/**
 * Verifica se o erro é instância de CustomError
 */
export function isCustomError(error: unknown): error is CustomError {
  return error instanceof CustomError;
}

/**
 * Retorna payload padrão de erro para a API
 */
export function getErrorResponse(error: unknown) {
  if (isCustomError(error)) {
    return {
      success: false,
      message: error.message,
      data: null,
      name: error.name,
      statusCode: error.statusCode,
    };
  }
  return {
    success: false,
    message: `Internal Server Error: ${error}`,
    data: null,
    statusCode: 500,
  };
}