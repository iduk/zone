import React, { useRef, useEffect, useState, useMemo } from "react"
import Layout from "../components/layout"
import ActiveLink from "../components/ActiveLink"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import TextLoop from "react-text-loop"
import axios from "axios"
import posts from "../data/mock_data.json"
import Marquee from "react-fast-marquee"
import { gsap, Power1, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Link from "next/link"
gsap.registerPlugin(ScrollTrigger)

const Logos = [
  { id: "logo1", img: "/img/logo-amazon.svg", name: "amazon" },
  { id: "logo2", img: "/img/logo-oliveyoung.svg", name: "oliveyoung" },
  { id: "logo3", img: "/img/logo-slack.svg", name: "slack" },
  { id: "logo4", img: "/img/logo-samsung.svg", name: "samsung" },
  { id: "logo5", img: "/img/logo-nodejs.svg", name: "nodejs" },
]

// index
function Index() {
  const list = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
  const postsList = posts.slice(0, 4)

  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", function () {
    //   gsap.utils.toArray(".text-outline").forEach(function (textLayer) {
    //     hide(textLayer)

    //     ScrollTrigger.create({
    //       trigger: textLayer,
    //       onEnter: function () {
    //         animateFrom(textLayer)
    //       },
    //       onEnterBack: function () {
    //         animateFrom(textLayer, -1)
    //       },
    //       onLeave: function () {
    //         hide(textLayer)
    //       },
    //     })
    //   })
    // })

    // gsap scrollTrigger
    gsap.utils.toArray(".page-index").forEach((section) => {
      const elems = section.querySelectorAll("section")

      gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "Power2.linear",
        overwrite: "auto",
      })

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 10%",
        yoyo: true,
        markers: false,
        pin: false,

        onEnter: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
          }),
        onLeave: () =>
          gsap.to(elems, {
            y: -100,
            opacity: 0,
            stagger: 0.15,
          }),
        onEnterBack: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: -0.15,
          }),
        onLeaveBack: () =>
          gsap.to(elems, {
            y: 100,
            opacity: 0,
            stagger: -0.15,
          }),
      })
    })
  }, [])

  return (
    <Layout title="Openfloor">
      {/* index page */}
      <div className="page-index">
        {/* intro */}
        <section className="feature">
          <div className="container">
            <div className="feature--header">
              {/* 1 */}
              <div>
                {/* <p className="h5 text-uppercase">Award 2023</p> */}
                <div className="headline text-uppercase">
                  <Link href="/">
                    <a>OPENFLOOR</a>
                  </Link>
                  <Link href="/">
                    <a>Multi-Platform</a>
                  </Link>
                  <Link href="/">
                    <a>Data to Information</a>
                  </Link>
                  <Link href="/">
                    <a>Device Handling</a>
                  </Link>
                  <Link href="/">
                    <a>Everyday Coding</a>
                  </Link>
                </div>
              </div>
              {/* \\ */}

              {/* 2 */}
              <div className="py-2">
                <h5>© New OPENFLOOR 2023 </h5>
              </div>
              {/* \\ */}
            </div>
          </div>
        </section>

        {/* image list */}
        <section className="grid-50">
          {/* back */}
          <div className="container-fluid background my-6">
            <article className="row no-gutters">
              <div
                className="col-12 col-md-6 border grid-50 section-bg"
                style={{
                  backgroundImage: "url(http://placebeard.it/1200/800)",
                }}
              ></div>
              <div className="col-12 col-md-6 border grid-50"></div>
            </article>
          </div>

          {/* fore */}
          <div className="container foreground my-6">
            <ul className="row justify-content-between align-content-stretch">
              <li className="col-12 col-md-6 grid-50 align-items-start">1</li>
              <li className="col-12 col-md-6">
                <div className="p-lg-5 p-3">
                  <h3 className="pb-3">
                    People with similar interests and goals come together to
                    change the world for the better.
                  </h3>
                  <p>
                    시들어 무엇을 기관과 싶이 얼음과 봄바람이다. 가진 타오르고
                    속잎나고, 힘차게 과실이 것이다. 원대하고, 미묘한 가는 피가
                    아니다. 목숨이 것은 보이는 피에 착목한는 청춘을 너의 보라.
                    끝에 거친 우리 방황하여도, 찬미를 만천하의 무엇을 밥을
                    기관과 사막이다. 못하다 끝까지 끓는 안고, 두기 그들의 쓸쓸한
                    투명하되 것이다. 이것이야말로 미묘한 얼음 그것을 관현악이며,
                    생명을 이것을 속잎나고, 말이다. 보이는 피어나는 뭇 싶이
                    칼이다. 이상, 영락과 것은 보라. 충분히 이 너의 풀이 찬미를
                    실현에 안고, 고행을 하였으며, 사막이다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="container-fluid py-6 bg-gray">
          <div className="container my-4">
            <article className="row">
              <div className="col-12 col-md-4">
                <div className="p-4 mask bg-black text-white">
                  <p className="h4">what we work.</p>
                  <div
                    className="display-2 d-flex align-items-center"
                    style={{ height: "35vh" }}
                  >
                    <p className="display-2 text-center py-3">
                      Inderstrial Design
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-4 mask bg-light">
                  <p className="h4">what we work.</p>
                  <div
                    className="display-2 text-center d-flex align-items-center justify-content-center"
                    style={{ height: "35vh" }}
                  >
                    <p className="display-2 text-center py-3">
                      <span className="badge badge-pill  border m-1">
                        Technology
                      </span>
                      <span className="badge badge-pill border m-1">
                        Innovation
                      </span>
                      <span className="badge badge-pill border m-1">
                        Affection
                      </span>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-4 mask bg-black text-white">
                  <p className="h4">what we work.</p>
                  <div
                    className="display-2 text-center d-flex align-items-center justify-content-center"
                    style={{ height: "35vh" }}
                  >
                    <p className="display-2 text-center py-3">
                      <span className="badge badge-pill  border m-1">
                        Technology
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="container py-8">
          <header className="d-flex justify-content-between align-items-baseline mb-4 ">
            <h1 className="headline">Performance</h1>
          </header>

          <ul className="row items-list">
            {postsList.map((item) => (
              <li key={item.index} className="col-12 col-md-6 col-lg-3 item">
                <div className="contents mb-4 mb-lg-0">
                  <span className="thumb mask mb-3">
                    <img
                      src="https://picsum.photos/480/640?random"
                      width={480}
                      height={640}
                      className="img-fluid"
                      alt=""
                    />
                  </span>
                  <h4 className="subject">{item.title}</h4>
                  <p>{item.desc}</p>
                  <small className="mt-4">#{item.skill}</small>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Clients Logo */}
        <section className="container-fluid">
          <div className="slide-wrap">
            <Marquee gradient={false} speed={30} direction={"right"}>
              <ul className="logos">
                {Logos.map((logo) => (
                  <li key={logo.id}>
                    <img src={logo.img} alt={logo.name} />
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
