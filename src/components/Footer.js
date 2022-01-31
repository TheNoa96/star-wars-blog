import React from "react";
import { FaJediOrder, FaEmpire } from 'react-icons/fa';

export const Footer = () => (
    <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
        <div className="container text-center">
        <h6><FaJediOrder /> {" "}
            May the force be with you {" "}
            <FaEmpire />
            </h6>
            <small>Copyright &copy; Your Website</small>
        </div>
    </footer>
);