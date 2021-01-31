import React, { useState, useEffect, useRef } from 'react'
import './FaceDetection.css';
import * as faceapi from 'face-api.js'
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';

function FaceDetection() {
    const videoHeight = 480;
    const videoWidth = 640;
    const [initialising, setInitialising] = useState(false);
    const [cameraOff, SetCameraOff] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();
    var Arr = [];

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URI = process.env.PUBLIC_URL + '/models';
            setInitialising(true);
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URI),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URI),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URI),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URI),
            ]).then(!cameraOff ? startVideo : offVideo)
        }
        loadModels();
    }, [cameraOff])


    const startVideo = () => {
        navigator.getUserMedia({
            video: {},
        }, (stream) => {
            stream.getTracks().forEach(function (track) {
                console.log(track)
                // track.enabled = false;
                // track.stop();
                console.log("On position")
            });
            return videoRef.current.srcObject = stream
        },
            err => console.log(err))
    }
    const offVideo = () => {
        navigator.getUserMedia({
            video: {},
        }, (stream) => {
            stream.getTracks().forEach(function (track) {
                console.log(track)
                track.enabled = false;
                track.stop();
                console.log("entered inside")
            });
        },
            err => console.log(err))
    }


    const handelVideoOnPlay = () => {
        const interval = setInterval(async () => {
            if (initialising) {
                setInitialising(false);
            }
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = {
                width: videoWidth,
                height: videoHeight
            }
            faceapi.matchDimensions(canvasRef.current, displaySize);
            const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight)
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);

            console.log(detections[0]);
            Arr.push(detections[0]);
            if (Arr.length === 10) {
                SetCameraOff(true);
                clearInterval(interval);
            }
        }, 1000)
    }


    return (
        <div className="App">
            <span>{initialising ? <QueryBuilderRoundedIcon className="initial" fontSize="large" /> : <PlayCircleFilledWhiteRoundedIcon className="ready" fontSize="large" />} </span>
            {
                !cameraOff ?
                    <Card className="faceDetect">
                        <div className="display-flex justify-content-center">
                            <video ref={videoRef} autoPlay muted height={videoHeight} width={videoWidth} onPlay={handelVideoOnPlay} />
                            <canvas ref={canvasRef} className="position-absolute" />
                        </div>
                        <LinearProgress className="progress" color="primary" />
                    </Card>
                    : <>
                        <div className="buttonContainer">
                            <Card className="faceAfterCard">
                                <h1>Welcome to The polling application </h1>
                            </Card>

                            <Button className="buttonConfirm" variant="outlined" color="secondary">
                                Cast Vote 👆
                            </Button>
                        </div>
                    </>
            }


        </div>
    );
}

export default FaceDetection;
