"use client";

export default function AlphaBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-lg font-bold">🚀 アルファ版</span>
        <span className="text-sm">
          現在、AIローンチくんはアルファ版として提供しています。機能改善のため、ご意見・ご要望をお待ちしております。
        </span>
      </div>
    </div>
  );
}
