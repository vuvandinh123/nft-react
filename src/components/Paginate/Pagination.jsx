import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


const Pagination = (props) => {
    const { totalPage, currentPage, basePath } = props;
    const currentPageNumber = Number(currentPage) || 1;


    let list = []

    const generatePageLink = (page, text, classNames) => {
        return (
            <li className={`page-item page-link ${classNames}`}>
                <Link to={basePath + page} className="page-link">{text}</Link>
            </li>
        );
    };

    // Thêm liên kết "first" và "previous" nếu currentPageNumber > 1
    if (currentPageNumber > 1) {
        list.push(generatePageLink(1, 'first', ''));
        list.push(generatePageLink(currentPageNumber - 1, 'trước', ''));
    }

    // Thêm liên kết đến các trang số
    const startPage = Math.max(currentPageNumber - 2, 1);
    const endPage = Math.min(currentPageNumber + 2, totalPage);

    for (let i = startPage; i <= endPage; i++) {
        const classNames = i === currentPageNumber ? 'bg-success bg-warning' : 'page-link';
        list.push(generatePageLink(i, i, classNames));
    }

    // Thêm liên kết "next" và "last" nếu currentPageNumber < totalPage
    if (currentPageNumber < totalPage) {
        list.push(generatePageLink(currentPageNumber + 1, 'sau', ''));
        list.push(generatePageLink(totalPage, 'last', ''));
    }
    return (
        <div className='mt-5 d-flex justify-content-center'>
            <nav aria-label="...">
                <ul className="pagination round-0">
                    {list.map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                        </React.Fragment>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination

