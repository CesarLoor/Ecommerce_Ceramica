import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './use-mobile';

let listeners: Function[] = [];

// Mock the window.matchMedia
const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
            matches,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn((event, cb) => {
                if (event === 'change') listeners.push(cb);
            }),
            removeEventListener: vi.fn((event, cb) => {
                listeners = listeners.filter(l => l !== cb);
            }),
            dispatchEvent: vi.fn(),
        })),
    });
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: matches ? 500 : 1024,
    });
};

describe('useIsMobile hook', () => {
    beforeEach(() => {
        listeners = [];
        mockMatchMedia(false);
    });

    it('should return false for desktop screens', () => {
        mockMatchMedia(false);
        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);
    });

    it('should return true for mobile screens', () => {
        mockMatchMedia(true);
        const { result } = renderHook(() => useIsMobile());

        expect(result.current).toBe(true);
    });

    it('should update when screen size changes', () => {
        mockMatchMedia(false);
        const { result, rerender } = renderHook(() => useIsMobile());

        expect(result.current).toBe(false);

        // Solo cambiamos la propiedad innerWidth porque el componente ya fue montado con el listener
        Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });

        act(() => {
            listeners.forEach(cb => cb());
        });

        expect(result.current).toBe(true);
    });

    it('should handle media query listener', () => {
        const mockAddEventListener = vi.fn();
        const mockRemoveEventListener = vi.fn();

        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: mockAddEventListener,
                removeEventListener: mockRemoveEventListener,
                dispatchEvent: vi.fn(),
            })),
        });

        const { unmount } = renderHook(() => useIsMobile());

        expect(mockAddEventListener).toHaveBeenCalled();

        unmount();

        expect(mockRemoveEventListener).toHaveBeenCalled();
    });
});
