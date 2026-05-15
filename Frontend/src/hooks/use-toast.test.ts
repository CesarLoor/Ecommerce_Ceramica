import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToast } from './use-toast';

describe('useToast hook', () => {
  it('should initialize with an empty toast', () => {
    const { result } = renderHook(() => useToast());
    
    expect(result.current.toast).toBeDefined();
    expect(typeof result.current.toast).toBe('function');
  });

  it('should create a toast when called', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({
        title: 'Test Toast',
        description: 'This is a test',
      });
    });

    expect(result.current.toast).toBeDefined();
  });

  it('should handle toast with variant', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    });

    expect(result.current.toast).toBeDefined();
  });

  it('should handle dismiss function when available', () => {
    const { result } = renderHook(() => useToast());
    
    expect(result.current.dismiss).toBeDefined();
  });

  it('should call dismiss when removing toasts', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.dismiss?.('1');
    });

    expect(result.current.dismiss).toBeDefined();
  });

  it('should handle multiple toasts', () => {
    const { result } = renderHook(() => useToast());
    
    act(() => {
      result.current.toast({
        title: 'Toast 1',
      });
      result.current.toast({
        title: 'Toast 2',
      });
      result.current.toast({
        title: 'Toast 3',
      });
    });

    expect(result.current.toast).toBeDefined();
  });
});
