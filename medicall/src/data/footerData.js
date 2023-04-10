import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Shop & More",
        menu: [
            {
                id: 1,
                link: "Buy Medicines",
                path: "/"
            },
            {
                id: 2,
                link: "Disease Prediction",
                path: "/"
            },
            {
                id: 3,
                link: "Create Appointment",
                path: "/"
            }
        ]
    },
    {
        id: 2,
        title: "Ours",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "/"
            },
            {
                id: 3,
                link: "FAQ",
                path: "/"
            }
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaFacebookF />,
        cls: "facebook",
        path: "/",
    },
    {
        id: 2,
        icon: <FaTwitter />,
        cls: "twitter",
        path: "/",
    },
    {
        id: 3,
        icon: <FaInstagram />,
        cls: "instagram",
        path: "/",
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        cls: "linkedin",
        path: "/",
    },
];
