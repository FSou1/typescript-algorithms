/**
 * Find a number in a sorted array
 *
 * @export
 * @param {number[]} array
 * @param {number} element
 * @return {(number | null)}
 */
export function binarySearch(array: number[], element: number, left: number, right: number): number | null {
    // There is no element in a nullable or undefined array
    if (!array) {
        return null;
    }

    // Search is out of range
    if (left > right) {
        return null;
    }

    const middle = Math.floor((left + right) / 2);
    if (array[middle] > element) {
        return binarySearch(array, element, left, middle - 1);
    }

    if (array[middle] < element) {
        return binarySearch(array, element, middle + 1, right);
    }

    return middle;
}
