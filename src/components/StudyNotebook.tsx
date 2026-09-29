import React, { useState } from 'react';
import { BookOpen, Check, Copy, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { playTapSound } from '../utils/soundEffects';

interface StudyNotebookProps {
  soundEnabled: boolean;
  onStartQuiz: () => void;
}

export const StudyNotebook: React.FC<StudyNotebookProps> = ({
  soundEnabled,
  onStartQuiz,
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'taphop' | 'lama' | 'luythua' | 'chiahet' | 'ucln'>('all');

  const PRIME_NUMBERS_UNDER_100 = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 
    73, 79, 83, 89, 97
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in duration-200">
      
      {/* Title */}
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
          Sách Cẩm Nang Bỏ Túi
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display mt-2 mb-2">
          Bí Kíp Ôn Tập Trọng Tâm Chương 1 Toán 6
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          Bộ kiến thức cô đọng chuẩn chương trình Kết Nối Tri Thức Với Cuộc Sống, học nhanh nhớ sâu!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-3 mb-8">
        {[
          { id: 'all', label: 'Tất Cả Bí Kíp 📚' },
          { id: 'taphop', label: '1. Tập Hợp 📦' },
          { id: 'lama', label: '2. Số La Mã 🏛️' },
          { id: 'luythua', label: '3. Lũy Thừa ⚡' },
          { id: 'chiahet', label: '4. Dấu Hiệu Chia Hết 🔍' },
          { id: 'ucln', label: '5. ƯCLN & BCNN 🎯' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              playTapSound(soundEnabled);
              setActiveSection(tab.id as typeof activeSection);
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
              activeSection === tab.id
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        
        {/* CARD 1: TẬP HỢP & PHẦN TỬ */}
        {(activeSection === 'all' || activeSection === 'taphop') && (
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
                📦
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-800 font-display">
                  1. Tập Hợp & Cách Cho Tập Hợp
                </h2>
                <p className="text-xs text-slate-500">Ký hiệu ∈, ∉, tập N và N*</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-amber-50/50 p-4 rounded-2xl border border-amber-200/80 space-y-2">
                <h3 className="font-bold text-amber-950">Quy tắc viết tập hợp:</h3>
                <p className="text-slate-700 leading-relaxed">
                  • Viết tên tập hợp bằng chữ cái in hoa: A, B, C, N...<br />
                  • Các phần tử nằm trong dấu ngoặc nhọn <code className="font-mono bg-white px-1.5 py-0.5 rounded text-amber-900 font-bold">&#123; &#125;</code>, cách nhau bởi dấu chấm phẩy <code className="font-mono font-bold">;</code><br />
                  • <strong>Mỗi phần tử chỉ được liệt kê 1 lần duy nhất</strong>, thứ tự liệt kê tùy ý.
                </p>
              </div>

              <div className="bg-sky-50/50 p-4 rounded-2xl border border-sky-200/80 space-y-2">
                <h3 className="font-bold text-sky-950">Phân biệt tập N và N*:</h3>
                <p className="text-slate-700 leading-relaxed">
                  • <code className="font-bold font-mono">N = &#123;0; 1; 2; 3; ...&#125;</code>: Tập các số tự nhiên (CÓ số 0).<br />
                  • <code className="font-bold font-mono">N* = &#123;1; 2; 3; 4; ...&#125;</code>: Tập các số tự nhiên KHÁC 0.<br />
                  • <strong>Công thức dãy cách đều:</strong><br />
                  <span className="font-semibold text-sky-900 bg-white px-2 py-1 rounded inline-block mt-1">
                    Số số hạng = (Số cuối - Số đầu) : khoảng cách + 1
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CARD 2: CHỮ SỐ LA MÃ */}
        {(activeSection === 'all' || activeSection === 'lama') && (
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-xl">
                🏛️
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-800 font-display">
                  2. Chữ Số La Mã Huyền Bí (Học Thuộc Siêu Nhanh)
                </h2>
                <p className="text-xs text-slate-500">I, V, X, L, C, D, M và số từ 1 đến 30</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center mb-4">
              {[
                { roman: 'I', val: 1 },
                { roman: 'V', val: 5 },
                { roman: 'X', val: 10 },
                { roman: 'L', val: 50 },
                { roman: 'C', val: 100 },
                { roman: 'D', val: 500 },
                { roman: 'M', val: 1000 },
              ].map((item) => (
                <div key={item.roman} className="bg-sky-50 p-2.5 rounded-xl border border-sky-200">
                  <span className="text-lg font-black font-mono text-sky-900 block">{item.roman}</span>
                  <span className="text-xs text-sky-700 font-bold">{item.val}</span>
                </div>
              ))}
            </div>

            {/* Quick table 1-30 */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs">
              <p className="font-bold text-slate-700 mb-2">Bảng tra cứu số La Mã từ 1 đến 30:</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 font-mono text-center">
                <span>1: I</span>
                <span>2: II</span>
                <span>3: III</span>
                <span className="font-bold text-rose-600">4: IV</span>
                <span>5: V</span>
                <span>6: VI</span>
                <span>7: VII</span>
                <span>8: VIII</span>
                <span className="font-bold text-rose-600">9: IX</span>
                <span>10: X</span>
                <span className="font-bold text-rose-600">14: XIV</span>
                <span className="font-bold text-rose-600">19: XIX</span>
                <span>20: XX</span>
                <span className="font-bold text-rose-600">24: XXIV</span>
                <span>25: XXV</span>
                <span className="font-bold text-rose-600">29: XXIX</span>
                <span>30: XXX</span>
                <span className="text-emerald-700 font-bold">50: L</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 italic">
                * Lưu ý: Không bao giờ viết chữ số I hoặc X quá 3 lần liên tiếp. Chữ số đứng trước trừ đi, đứng sau cộng vào (IV = 5 - 1 = 4; VI = 5 + 1 = 6).
              </p>
            </div>
          </div>
        )}

        {/* CARD 3: LŨY THỪA & THỨ TỰ PHÉP TÍNH */}
        {(activeSection === 'all' || activeSection === 'luythua') && (
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">
                ⚡
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-800 font-display">
                  3. Phép Tính Lũy Thừa & Thứ Tự Thực Hiện
                </h2>
                <p className="text-xs text-slate-500">Nhân, chia lũy thừa cùng cơ số & quy tắc ngoặc</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 space-y-2.5">
                <h3 className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  Quy tắc lũy thừa cùng cơ số:
                </h3>
                <div className="space-y-1.5 font-mono text-emerald-900 font-semibold bg-white p-3 rounded-xl border border-emerald-200">
                  <p>• aᵐ · aⁿ = aᵐ⁺ⁿ (Giữ nguyên cơ số, cộng số mũ)</p>
                  <p>• aᵐ : aⁿ = aᵐ⁻ⁿ (Giữ nguyên cơ số, trừ số mũ, với a ≠ 0, m ≥ n)</p>
                  <p>• Quy ước: a¹ = a; a⁰ = 1 (với a ≠ 0)</p>
                </div>
              </div>

              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-2.5">
                <h3 className="font-bold text-amber-950">Thứ tự thực hiện phép tính chuẩn:</h3>
                <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-2 text-slate-700">
                  <p>
                    <strong>1. Không có ngoặc:</strong><br />
                    Lũy thừa ➔ Nhân, chia ➔ Cộng, trừ
                  </p>
                  <p>
                    <strong>2. Có dấu ngoặc:</strong><br />
                    Ngoặc tròn ( ) ➔ Ngoặc vuông [ ] ➔ Ngoặc nhọn &#123; &#125;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CARD 4: DẤU HIỆU CHIA HẾT & SỐ NGUYÊN TỐ */}
        {(activeSection === 'all' || activeSection === 'chiahet') && (
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                🔍
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-800 font-display">
                  4. Dấu Hiệu Chia Hết & 25 Số Nguyên Tố &lt; 100
                </h2>
                <p className="text-xs text-slate-500">2, 3, 5, 9, số nguyên tố vs hợp số</p>
              </div>
            </div>

            {/* Divisibility rules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4 text-xs">
              <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                <span className="font-bold text-purple-900 block mb-1">Chia hết cho 2:</span>
                <span className="text-purple-700">Chữ số tận cùng là chẵn: 0, 2, 4, 6, 8.</span>
              </div>

              <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                <span className="font-bold text-purple-900 block mb-1">Chia hết cho 5:</span>
                <span className="text-purple-700">Chữ số tận cùng là 0 hoặc 5.</span>
              </div>

              <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                <span className="font-bold text-purple-900 block mb-1">Chia hết cho 3:</span>
                <span className="text-purple-700">TỔNG các chữ số chia hết cho 3.</span>
              </div>

              <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
                <span className="font-bold text-purple-900 block mb-1">Chia hết cho 9:</span>
                <span className="text-purple-700">TỔNG các chữ số chia hết cho 9.</span>
              </div>
            </div>

            {/* Prime numbers grid */}
            <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-purple-900">
                  ⭐ Bảng 25 Số Nguyên Tố Nhỏ Hơn 100:
                </span>
                <span className="text-[11px] text-purple-700 font-semibold">
                  Số 2 là số chẵn duy nhất!
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PRIME_NUMBERS_UNDER_100.map((num) => (
                  <span
                    key={num}
                    className="px-2.5 py-1 bg-white border border-purple-200 rounded-lg text-xs font-mono font-bold text-purple-900 shadow-2xs"
                  >
                    {num}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-purple-800 mt-2 font-medium">
                * Ghi nhớ: Số 0 và số 1 <strong>KHÔNG</strong> phải là số nguyên tố, cũng không phải hợp số!
              </p>
            </div>
          </div>
        )}

        {/* CARD 5: 3 BƯỚC VÀNG TÌM ƯCLN VÀ BCNN */}
        {(activeSection === 'all' || activeSection === 'ucln') && (
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-xl">
                🎯
              </span>
              <div>
                <h2 className="text-lg font-bold text-slate-800 font-display">
                  5. Ba Bước Vàng Tìm ƯCLN & BCNN (Bảng Đối Chiếu)
                </h2>
                <p className="text-xs text-slate-500">Phân biệt chính xác, không bao giờ nhầm lẫn</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {/* UCLN */}
              <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-200 space-y-2">
                <h3 className="font-bold text-rose-950 text-base flex items-center gap-1.5">
                  <span>🔴</span> ƯCLN (Ước Chung Lớn Nhất)
                </h3>
                <p className="text-slate-700">
                  <strong>B1:</strong> Phân tích mỗi số ra thừa số nguyên tố.<br />
                  <strong>B2:</strong> Chọn ra các thừa số <strong>CHUNG</strong>.<br />
                  <strong>B3:</strong> Lập tích với số mũ <strong>NHỎ NHẤT</strong>.
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-rose-200 text-xs font-mono text-rose-900">
                  Ví dụ: 18 = 2 · 3² và 30 = 2 · 3 · 5<br />
                  ƯCLN(18, 30) = 2¹ · 3¹ = 6
                </div>
              </div>

              {/* BCNN */}
              <div className="bg-teal-50/60 p-4 rounded-2xl border border-teal-200 space-y-2">
                <h3 className="font-bold text-teal-950 text-base flex items-center gap-1.5">
                  <span>🟢</span> BCNN (Bội Chung Nhỏ Nhất)
                </h3>
                <p className="text-slate-700">
                  <strong>B1:</strong> Phân tích mỗi số ra thừa số nguyên tố.<br />
                  <strong>B2:</strong> Chọn các thừa số <strong>CHUNG và RIÊNG</strong>.<br />
                  <strong>B3:</strong> Lập tích với số mũ <strong>LỚN NHẤT</strong>.
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-teal-200 text-xs font-mono text-teal-900">
                  Ví dụ: 12 = 2² · 3 và 18 = 2 · 3²<br />
                  BCNN(12, 18) = 2² · 3² = 4 · 9 = 36
                </div>
              </div>
            </div>

            {/* Golden theorem callout */}
            <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <span className="text-base shrink-0">👑</span>
              <div>
                <strong>Định lý vàng: </strong> Cho hai số tự nhiên a và b: <code className="font-mono font-bold bg-white px-1.5 py-0.5 rounded">a · b = ƯCLN(a, b) · BCNN(a, b)</code>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Action Footer */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            playTapSound(soundEnabled);
            onStartQuiz();
          }}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform active:scale-98 inline-flex items-center gap-2"
        >
          <span>Đã Nắm Chắc Bí Kíp! Thử Thách Trắc Nghiệm Ngay 🚀</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
