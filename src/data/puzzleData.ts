import { SetSortingGameData, RomanPairItem } from '../types/math';

export const SET_SORTING_GAMES: SetSortingGameData[] = [
  {
    title: 'Phân loại Số Nguyên Tố & Hợp Số',
    description: 'Kéo thả hoặc chạm vào từng con số để đưa về đúng tập hợp. Cẩn thận với số 0 và số 1!',
    setAName: 'Tập Hợp Số Nguyên Tố (P)',
    setBName: 'Tập Hợp Hợp Số (C)',
    items: [
      { id: 'item-2', value: 2, label: '2', correctSet: 'setA' },
      { id: 'item-3', value: 3, label: '3', correctSet: 'setA' },
      { id: 'item-4', value: 4, label: '4', correctSet: 'setB' },
      { id: 'item-7', value: 7, label: '7', correctSet: 'setA' },
      { id: 'item-9', value: 9, label: '9', correctSet: 'setB' },
      { id: 'item-13', value: 13, label: '13', correctSet: 'setA' },
      { id: 'item-15', value: 15, label: '15', correctSet: 'setB' },
      { id: 'item-1', value: 1, label: '1', correctSet: 'neither' },
      { id: 'item-21', value: 21, label: '21', correctSet: 'setB' },
      { id: 'item-0', value: 0, label: '0', correctSet: 'neither' },
    ],
    explanation: 'Số nguyên tố chỉ có đúng 2 ước (1 và chính nó). Hợp số có nhiều hơn 2 ước. Đặc biệt: số 0 và 1 không là số nguyên tố cũng không là hợp số!',
  },
  {
    title: 'Venn Diagram: Chia hết cho 2 & Chia hết cho 5',
    description: 'Xác định số chỉ chia hết cho 2, chỉ chia hết cho 5, chia hết cho cả hai, hoặc không chia hết cho số nào.',
    setAName: 'Tập A (Chia hết cho 2)',
    setBName: 'Tập B (Chia hết cho 5)',
    items: [
      { id: 'v-12', value: 12, label: '12', correctSet: 'setA' },
      { id: 'v-25', value: 25, label: '25', correctSet: 'setB' },
      { id: 'v-30', value: 30, label: '30', correctSet: 'both' },
      { id: 'v-18', value: 18, label: '18', correctSet: 'setA' },
      { id: 'v-45', value: 45, label: '45', correctSet: 'setB' },
      { id: 'v-50', value: 50, label: '50', correctSet: 'both' },
      { id: 'v-27', value: 27, label: '27', correctSet: 'neither' },
      { id: 'v-70', value: 70, label: '70', correctSet: 'both' },
    ],
    explanation: 'Các số tận cùng là 0 (30, 50, 70) thuộc phần giao của cả hai tập hợp vì vừa chia hết cho 2 vừa chia hết cho 5!',
  },
];

export const ROMAN_NUMERAL_PAIRS: RomanPairItem[] = [
  { id: 'r-4', roman: 'IV', arabic: 4, meaning: '5 - 1 = 4' },
  { id: 'r-9', roman: 'IX', arabic: 9, meaning: '10 - 1 = 9' },
  { id: 'r-14', roman: 'XIV', arabic: 14, meaning: '10 + 4' },
  { id: 'r-19', roman: 'XIX', arabic: 19, meaning: '10 + 9' },
  { id: 'r-24', roman: 'XXIV', arabic: 24, meaning: '20 + 4' },
  { id: 'r-26', roman: 'XXVI', arabic: 26, meaning: '20 + 6' },
  { id: 'r-29', roman: 'XXIX', arabic: 29, meaning: '20 + 9' },
  { id: 'r-50', roman: 'L', arabic: 50, meaning: 'Năm mươi' },
  { id: 'r-100', roman: 'C', arabic: 100, meaning: 'Một trăm' },
];

export interface BelongsSymbolGameItem {
  id: string;
  element: string;
  setNotation: string;
  description: string;
  correctSymbol: '∈' | '∉';
  explanation: string;
}

export const BELONGS_PUZZLE_ITEMS: BelongsSymbolGameItem[] = [
  {
    id: 'b-1',
    element: '0',
    setNotation: 'N*',
    description: 'Số 0 đối với tập hợp các số tự nhiên khác 0 (N*)',
    correctSymbol: '∉',
    explanation: 'Tập hợp N* = {1; 2; 3; ...} không chứa phần tử 0, do đó 0 ∉ N*.',
  },
  {
    id: 'b-2',
    element: '2',
    setNotation: 'P (Tập số nguyên tố)',
    description: 'Số 2 đối với tập hợp các số nguyên tố',
    correctSymbol: '∈',
    explanation: '2 là số nguyên tố nhỏ nhất và chẵn duy nhất, do đó 2 ∈ P.',
  },
  {
    id: 'b-3',
    element: '15',
    setNotation: 'Ư(45)',
    description: 'Số 15 đối với tập hợp các ước của 45',
    correctSymbol: '∈',
    explanation: 'Vì 45 chia hết cho 15 (45 : 15 = 3) nên 15 là ước của 45, do đó 15 ∈ Ư(45).',
  },
  {
    id: 'b-4',
    element: '28',
    setNotation: 'B(6)',
    description: 'Số 28 đối với tập hợp các bội của 6',
    correctSymbol: '∉',
    explanation: 'Vì 28 không chia hết cho 6 (28 : 6 = 4 dư 4) nên 28 không phải là bội của 6, tức 28 ∉ B(6).',
  },
  {
    id: 'b-5',
    element: '1',
    setNotation: 'P (Tập số nguyên tố)',
    description: 'Số 1 đối với tập hợp số nguyên tố',
    correctSymbol: '∉',
    explanation: 'Số nguyên tố bắt buộc phải lớn hơn 1, nên số 1 ∉ P.',
  },
  {
    id: 'b-6',
    element: '100',
    setNotation: 'B(25)',
    description: 'Số 100 đối với tập hợp bội của 25',
    correctSymbol: '∈',
    explanation: 'Vì 100 = 25 · 4 nên 100 là bội của 25, tức 100 ∈ B(25).',
  },
];
