"use client";

const impressum = () => {
  return (
    <div className="py-24 px-[25vw] w-full">
      <style jsx>{`
        p {
          @apply text-lg;
        }
      `}</style>
      <h1 className="text-4xl text-center tracking-[0.3em] mb-20">Impressum</h1>
      <div className="">
        <p className={"italic mb-2 text-xl"}>Angaben gemäß § 5 DDG</p>
        <p className={"mb-8 ml-3"}>
          Dominik Lenhart <br />
          Galgenanger 4<br />
          97437 Haßfurt <br />
        </p>
        <div>
          <p className={"text-3xl font-semibold mb-2"}>Vertreten durch: </p>
          <p className={"mb-4 ml-3"}>Dominik Lenhart</p>
          <br />
        </div>
        <div>
          <p className={"text-3xl font-semibold mb-2"}>Kontakt:</p>
          <p className={"ml-3"}>Telefon: +49 176 83419242</p>
          <p className={"ml-3 mb-8"}>
            E-Mail:{" "}
            <a className={""} href="mailto:info@verge-one.com">
              info@verge-one.com
            </a>
          </p>
        </div>
        <div>
          <h2 className={"text-xl"}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </h2>
          <br />
          <div className={"ml-3 mb-8"}>
            Dominik Lenhart <br />
            Galgenanger 4<br />
            97437 Haßfurt <br />
          </div>
        </div>
        <div>
          <h2 className={"text-3xl font-semibold"}>Haftungsausschluss: </h2>
          <br />
          <h2 className={"text-2xl mb-1.5 font-semibold"}>Haftung für Links</h2>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <br />
          <br />
          <h2 className={"text-2xl mb-1.5 font-semibold"}>Urheberrecht</h2>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
          <br />
          <br />
          <h2 className={"text-2xl mb-1.5 font-semibold"}>Datenschutz</h2>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
          ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
          von Werbeinformationen, etwa durch Spam-Mails, vor.
          <br />
        </div>
        <br />
      </div>
    </div>
  );
};

export default impressum;
