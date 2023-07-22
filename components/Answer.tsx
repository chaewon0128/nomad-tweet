import React from 'react';

export default function Answer() {
    return (
        <div >
            {[1, 1, 1, 1, 1].map((_, i) => (
                <>
                    <div className="pl-2 py-5 pb-3 border-b last:border-b-0 ">
                        <div className="mb-3">
                            <span className="font-semibold mr-2">nico</span>
                            <span className="text-gray-500 text-sm">@아이디</span>
                        </div>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero beatae suscipit modi impedit! Iste porro repellendus suscipit eligendi, omnis impedit adipisci fugiat libero voluptas maiores accusamus praesentium distinctio nihil!</p>
                    </div>
                </>
            ))}
        </div>
    );
}

