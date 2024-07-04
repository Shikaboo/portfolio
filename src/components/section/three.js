import * as THREE from "three";

import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StartPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    const camera = new THREE.PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      1,
      500,
    );
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a"); // 배경색 변경
    camera.position.set(0, 0, 15);

    // 조명

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const group3d = new THREE.Object3D();
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const gparticular = new THREE.CircleGeometry(1, 3);
    const bparticular = new THREE.CircleGeometry(1, 3);

    const material = new THREE.MeshPhysicalMaterial({
      color: "#0a0a0a",
      flatShading: true,
      side: THREE.DoubleSide,
    });
    const wmaterial = new THREE.MeshBasicMaterial({    
      color: "#E56A4E",
      wireframe: true,
    });
    const gmaterial = new THREE.MeshPhongMaterial({
      color: "#F49983",
      side: THREE.DoubleSide,
    });

    const mathRandom = (num = 10) => -Math.random() * num + Math.random() * num;

    for (let i = 1; i < 300; i++) {
      const pscale = 0.05 + Math.abs(mathRandom(0.03));
      const particular = new THREE.Mesh(gparticular, gmaterial);
      particular.position.set(mathRandom(), mathRandom(), mathRandom());
      particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
      particular.scale.set(pscale, pscale, pscale);
      group3d.add(particular); // 파티클
    }

    const cube = new THREE.Mesh(geometry, material);
    const wcube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: "#E56A4E", wireframe: true })); // 색상 변경 + cube를 깜싸는 다각형 구조체
    const bcube = new THREE.Mesh(bparticular, wmaterial); // wcube와 겹치는 삼각형

    bcube.scale.set(2, 2, 2);
    bcube.position.z = -1;

    const scaleSet = 1;
    cube.scale.set(scaleSet, scaleSet, scaleSet);

    scene.add(group3d);
    scene.add(cube);
    scene.add(wcube);
    scene.add(bcube);

    // 카메라 회전 애니메이션 함수
    const onChangeCamera = () => {
      scene.rotation.y = 0;
      gsap.to(scene.rotation, {
        y: (360 * Math.PI) / 180,
        duration: 3,
        ease: "Power3.easeInOut",
      });
    };

    // 애니메이션 속도 조절
    let numRot = 0.001;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);
      group3d.rotation.x += numRot;
      group3d.rotation.y += numRot;
      group3d.rotation.z += numRot;

      cube.rotation.z -= numRot;
      bcube.rotation.z += numRot;
      wcube.rotation.z -= numRot;

      renderer.render(scene, camera);
    };

    animate();
    
    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
    };
  }, []);

  return <canvas id="canvas" ref={canvasRef} style={{display:'block'}}/>;
};

export default StartPage;
