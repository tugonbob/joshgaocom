import React, { useState, ChangeEvent } from "react";
import {
  ContentHeader,
  LatexDiv,
  MainContentDiv,
  RowDiv,
  ScrollDiv,
  Spacer,
} from "../../../commonComponents";
import { CifarKnnImageClassificationCard } from "./CifarKnnImageClassificationCard";
import Latex from "react-latex-next";
import cifarImages from "../../../../assets/projects/aiml/cifarKnnImageClassification/cifarImages.png";
import { ImageUploader } from "../../../commonComponents/imageUploader";
import { BoxButton } from "../../../commonComponents/boxButton";
import { ColorBoxButton } from "../../../commonComponents/colorBoxButton";

export function CifarKnnImageClassificationPage() {
  const [image, setImage] = useState<File | null>(null);
  const [k, setK] = useState<string>("5");
  const [distanceFunction, setDistanceFunction] = useState<string>("l1");
  const [knnResponse, setKnnResponse] = useState<any>(null);

  const runKnn = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch(
        `https://relaxing-vulture-trusty.ngrok-free.app/aiml/cifar-knn-image-classification?k=${k}&distance_function=${distanceFunction}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setKnnResponse(data);
    }
  };

  return (
    <ScrollDiv>
      <CifarKnnImageClassificationCard toFullscreen />
      <MainContentDiv>
        <ContentHeader
          date="1/18/2024"
          skills={["python"]}
          projectComponents="K Nearest Neighbor Algorithm with CIFAR-10 Database Interactive Demo"
          sources={{
            github: "https://github.com/tugonbob/cifar-knn-classifer",
          }}
        />
        <h2>K-Nearest Neighbors Algorithm</h2>
        <p>
          <Latex>
            The KNN algorithm finds the $k$ number of images that are most
            similar to the input image. And gives a prediction based on the most
            common class of those similar images.
          </Latex>
        </p>
        <h2>Selected Database</h2>
        <p>
          The CIFAR-10 dataset consists of 60000 32x32 colour images in 10
          classes, with 6000 images per class. There are 50000 training images
          and 10000 test images.
        </p>
        <Spacer />
        <img
          src={cifarImages}
          style={{
            width: "75%",
            minWidth: 450,
          }}
        />
        <h2>Distance Functions</h2>
        <p>
          The algorithm determines how similar another image is through a
          distance function. In this demo we will provide two distance formulas:
          L1 Distance and L2 Distance
        </p>
        <h3>L1 Distance (Manhattan Distance)</h3>
        <p>The L1 distance function is formally defined as follows:</p>
        <LatexDiv>
          <Latex>{"$$d(p,q)=\\Sigma_i^n \\mid p_i - q_i \\mid $$"}</Latex>
          <Spacer size={4} />
          <p>Where:</p>
          <Latex>$ d() = $ distance function</Latex>
          <Spacer size={4} />
          <Latex>$p = $ input image</Latex>
          <Spacer size={4} />
          <Latex>$q = $ comparison image</Latex>
          <Spacer size={4} />
          <Latex>
            {
              "$\\Sigma_i^n \\mid p_i - q_i \\mid = $ the sum of the absolute difference of every corresponding pixel of both images"
            }
          </Latex>
        </LatexDiv>
        <h3>L2 Distance (Euclidean Distance)</h3>
        <p>The L2 distance function is formally defined as follows:</p>
        <LatexDiv>
          <Latex>{"$$d(p, q) = \\sqrt{\\Sigma_i^n(q_i-p_i)^2}$$"}</Latex>
          <Spacer size={4} />
          <p>Where:</p>
          <Latex>$ d() = $ distance function</Latex>
          <Spacer size={4} />
          <Latex>{"$p = $ input image"}</Latex>
          <Spacer size={4} />
          <Latex>{"$q = $ comparison image"}</Latex>
          <Spacer size={4} />
          <Latex>
            {
              "$\\Sigma_i^n \\mid p_i - q_i \\mid = $ the square root of the sum of the square difference of every corresponding pixel of both images"
            }
          </Latex>
        </LatexDiv>
        <h2>Interactive Demo</h2>
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "var(--borderRadius)",
            padding: 52,
          }}
        >
          <RowDiv style={{ alignItems: "start" }}>
            <ImageUploader image={image} setImage={setImage} />
            <div
              style={{
                marginLeft: 32,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="k dropdown">k:</label>
              <select
                id="k dropdown"
                value={k}
                onChange={(e) => setK(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <Spacer />
              <label htmlFor="distance function dropdown">
                Distance Function:
              </label>
              <select
                id="k dropdown"
                value={distanceFunction}
                onChange={(e) => setDistanceFunction(e.target.value)}
              >
                <option value="l1">l1 (Manhattan Distance)</option>
                <option value="l2">l2 (Euclidean Distance)</option>
              </select>
              <Spacer />
              <ColorBoxButton
                style={{ alignSelf: "center", minHeight: 0 }}
                onClick={runKnn}
              >
                <p style={{ margin: 0, color: "var(--primary)" }}>Run KNN</p>
              </ColorBoxButton>
            </div>
          </RowDiv>
          <img
            src={`data:image/jpeg;base64,${knnResponse?.knn_result_image}`}
          />
          <p>{knnResponse?.error}</p>
        </div>
      </MainContentDiv>
    </ScrollDiv>
  );
}
