import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase.js";

const PortfolioDataContext = createContext(null);

const DOC_PATH = "portfolios/my-portfolio";

export function PortfolioDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const snap = await getDoc(doc(db, DOC_PATH));
        if (cancelled) return;

        if (snap.exists()) {
          setData(snap.data());
        } else {
          setError(new Error("Documento no encontrado"));
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PortfolioDataContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioDataContext.Provider>
  );
}

export function usePortfolioData() {
  const ctx = useContext(PortfolioDataContext);
  if (!ctx) {
    throw new Error(
      "usePortfolioData debe usarse dentro de <PortfolioDataProvider>"
    );
  }
  return ctx;
}
