import { GithubOutlined, LinkedinOutlined, LoadingOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import DefaultLayout from "../layouts/DefaultLayout";
import styles from '../styles/pages/contact.module.scss'
import ReCAPTCHA from "reaptcha"
//var ReCAPTCHA = require('react-recaptcha');
import { useEffect, useRef, useState } from "react";
import { Button, Spin } from "antd";
import axios from "../plugins/axios";

//this text obfuscation is needed to be sure that any page scrappers and bots will not get my contact information

let obfuscate = (str: string) => Array.from(str).map(l => Array.from(keytbl).indexOf(l))
let unobfuscate = (obfStr: number[]) => obfStr.map(i => keytbl[i]).join('')
const keytbl = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=!@#$%^&*()_+[];',./{}:\"<>? "

const contacts = [
    {
        "icon": (<MailOutlined />),
        "name": [40,25,10,7,18],
        "href": [25,10,7,18,4,8,85,12,7,25,10,11,81,17,10,3,9,6,11,11,11,11,65,14,25,10,7,18,81,21,8,25],
        "value": [12,7,25,10,11,81,17,10,3,9,6,11,11,11,11,65,14,25,10,7,18,81,21,8,25]
    },
    {
        "icon": (<GithubOutlined />),
        "name": [40,7,4,41,6,23],
        "href": [15,4,4,9,11,85,82,82,14,7,4,15,6,23,81,21,8,25,82,38,7,25,10,11,11,11,11],
        "value": [65,38,7,25,10,11,11,11,11]
    },
    {
        "icon": (<LinkedinOutlined />),
        "name": [44,7,24,17,2,12,33,24],
        "href": [15,4,4,9,11,85,82,82,1,1,1,81,18,7,24,17,2,12,7,24,81,21,8,25,82,7,24,82,9,7,18,2,22,8,7,12,82],
        "value": [65,9,7,18,2,22,8,7,12]
    },
    {
        "icon": (<SendOutlined />),
        "name": [30,2,18,2,14,3,10,25],
        "href": [15,4,4,9,11,85,82,82,4,81,25,2,82,24,6,18,18,7,11,4,15,2,3,2],
        "value": [65,24,6,18,18,7,11,4,15,2,3,2]
    }
]

export default function ContactsPage(){
    const [showInfo, setShowInfo] = useState(false)
    const [isPending, setIsPending] = useState(false)

    const handleRecaptchaSubmit = (token: any) =>{
        setIsPending(true)
        
        axios.post('recaptcha', {token})
            .then((res) => {
                setShowInfo(res.data)
            }).catch((e) => {
                console.error(e)
            }).finally(() => {
                setIsPending(false)
            })

    }

    return (<DefaultLayout>
        <div className={styles.container}>
            <div>
                {   
                    isPending
                    ? (<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />)
                    : (
                        showInfo 
                        ? (<ul>
                            {
                                contacts.map(c => {
                                    return (<li 
                                            key={unobfuscate(c.name)}
                                            onClick={() => window.open(unobfuscate(c.href), "_blank")}
                                        >
                                            {c.icon} {unobfuscate(c.name)}
                                        </li>
                                    )
                                })
                            }
                        </ul>)
                        : (<ReCAPTCHA 
                            sitekey={process.env.RECAPTCHA_SITE_KEY as string}
                            onVerify={handleRecaptchaSubmit}
                        />)
                    )
                }
            </div>
        </div>    
    </DefaultLayout>)
}