"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues with Leaflet
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

// Import Vietnam GeoJSON data
import vietnamGeoJSON from "../data/vn_geo.json";
import islandsGeoJSON from "../data/vn_islands.json";

interface GeoJSONFeature {
  type: "Feature";
  properties: {
    cartodb_id?: number;
    id_1?: number;
    name: string;
    slug?: string;
    oldName?: string;
    name_en?: string;
    type?: string;
    sovereignty?: string;
    archipelago?: string;
    country?: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

interface GeoJSONData {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

interface VietnamMapProps {
  locale: string;
}

export default function VietnamMap({ locale }: VietnamMapProps) {
  const [selectedProvince, setSelectedProvince] = useState<
    GeoJSONFeature["properties"] | null
  >(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(
    null
  );

  useEffect(() => {
    setIsClient(true);
    // Fix for default markers in react-leaflet
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
      });
    }
  }, []);

  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      click: (e: any) => {
        console.log("Clicked on:", feature.properties.name);
        setSelectedFeatureId(feature.properties.name);
        setSelectedProvince(feature.properties);
        e.target.bringToFront();
      }
    });
  };

  const style = (feature: any) => {
    const isSelected = selectedFeatureId === feature.properties.name;
    return {
      fillColor: isSelected ? "#ff7800" : "#3388ff",
      weight: isSelected ? 3 : 2,
      opacity: 1,
      color: isSelected ? "#666" : "white",
      fillOpacity: isSelected ? 0.8 : 0.6
    };
  };

  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] relative">
      <MapContainer
        center={[16.0, 107.0]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        <GeoJSON
          key={`vietnam-${selectedFeatureId}`}
          data={vietnamGeoJSON as GeoJSONData}
          style={style}
          onEachFeature={onEachFeature}
        />
        <GeoJSON
          key={`islands-${selectedFeatureId}`}
          data={islandsGeoJSON as GeoJSONData}
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>

      {/* Selected province details */}
      {selectedProvince && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm z-10 border border-gray-200">
          <h3 className="font-bold text-lg mb-2 text-blue-800">
            {locale === "vi"
              ? selectedProvince.name
              : selectedProvince.name_en || selectedProvince.name}
          </h3>
          {selectedProvince.oldName &&
            selectedProvince.oldName !== selectedProvince.name && (
              <p className="text-sm text-gray-500 mb-2">
                {locale === "vi" ? "Tên cũ:" : "Former name:"}{" "}
                {selectedProvince.oldName}
              </p>
            )}
          <p className="text-sm text-gray-600 mb-3">
            {selectedProvince.country === "Vietnam" && selectedProvince.slug
              ? locale === "vi"
                ? `Quần đảo ${selectedProvince.name} nằm trên Biển Đông và thuộc chủ quyền của Việt Nam.`
                : `${selectedProvince.name} archipelago located in the East Vietnam Sea under Vietnamese sovereignty.`
              : locale === "vi"
              ? "Tỉnh thành thuộc Việt Nam với biên giới hành chính được cập nhật theo quyết định sáp nhập năm 2025."
              : "Vietnamese province with administrative boundaries updated according to the 2025 merger decisions."}
          </p>
          {selectedProvince.slug && (
            <div className="text-sm">
              <strong>
                {locale === "vi" ? "Mã định danh:" : "Identifier:"}
              </strong>{" "}
              {selectedProvince.slug}
            </div>
          )}
          <button
            onClick={() => {
              setSelectedProvince(null);
              setSelectedFeatureId(null);
            }}
            className="mt-3 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            {locale === "vi" ? "Đóng" : "Close"}
          </button>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-2 rounded text-sm">
        {locale === "vi"
          ? "Click vào tỉnh/quần đảo để chọn và xem chi tiết"
          : "Click on provinces/archipelagos to select and view details"}
      </div>
    </div>
  );
}
