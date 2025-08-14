"use client"

import { useState } from "react"

const Journals = () => {
  const [activeSection, setActiveSection] = useState("about")

  // Journal content data structure
  const journalData = {
    title: "International Journal of Multidisciplinary Advances in Engineering, Management & Computer Applications",
    shortTitle: "IJMAEMCA",
    subtitle: "Peer-Reviewed Journal",

    sections: {
      about: {
        title: "About the Journal",
        icon: "bi-info-circle",
        content: [
          "The International Journal of Multidisciplinary Advances in Engineering, Management & Computer Applications (IJMAEMCA) is a multidisciplinary, peer-reviewed open access journal that aims to bridge the gap between theory and practice across different areas such as engineering, computing, and management sciences.",
          "IJMAEMCA provides a comprehensive platform for scholars, professionals, and researchers to publish innovative research and case-based applications that focused on modern challenges and contribute to the advancement in science and technology.",
          "IJMAEMCA is committed to upholding high academic standards, integrity, and originality in every published work. The journal encourages multidisciplinary research and fosters knowledge exchange among academia, industry, and policymakers. It is published biannually and encourage submissions throughout the year.",
        ],
      },

      aim: {
        title: "Aim & Objectives",
        icon: "bi-bullseye",
        content: [
          "The International Journal of Multidisciplinary Advances in Engineering, Management & Computer Applications (IJMAEMCA) is a multidisciplinary, peer-reviewed, open-access journal dedicated to publish innovative and high-quality research that fit in various fields including engineering, computing, management, and applied sciences.",
          "The journal aims to facilitate the worldwide exchange of knowledge, encourage interdisciplinary research, and support inventions that address modern technological and societal issues.",
          "IJMAEMCA serves as a platform for scholars, industry professionals, researchers, and academicians to exchange theoretical and applied research with practical relevance and impact. The journal welcomes original and innovative contributions that shows strong advancements in scientific knowledge, technology adoption, system modeling, and real-world applications.",
        ],
      },

      scope: {
        title: "Journal Scope",
        icon: "bi-diagram-3",
        content: "IJMAEMCA accepts manuscripts covering, but not limited to, the following areas:",
        categories: [
          {
            title: "1. Engineering and Technology",
            items: [
              "Electrical, Mechanical, Civil, Electronics and Chemical Engineering",
              "Artificial Intelligence and Machine Learning",
              "Robotics, IoT, and Embedded Systems",
              "Renewable Energy and Environmental Engineering",
              "Smart Cities and Infrastructure Development",
              "Materials Science and Nanotechnology",
            ],
          },
          {
            title: "2. Advanced Computing",
            items: [
              "Cloud Computing, Edge Computing, and High-Performance Systems",
              "Cybersecurity and Blockchain Technology",
              "Data Analytics, Data Mining, and Business Intelligence",
              "Human-Computer Interaction and Software Engineering",
              "Natural Language Processing and Computer Vision",
              "Computational Intelligence and Algorithm Optimization",
            ],
          },
          {
            title: "3. Management and Applied Business",
            items: [
              "Operations and Supply Chain Management",
              "Strategic and Innovation Management",
              "Digital Transformation and FinTech",
              "Human Resource Management and Leadership",
              "Entrepreneurship and Startup Ecosystems",
              "Marketing Analytics and Consumer Behavior",
            ],
          },
          {
            title: "4. Interdisciplinary and Applied Sciences",
            items: [
              "Health Informatics and Biomedical Engineering",
              "Agricultural Technology and Food Systems",
              "Education Technology and E-learning",
              "Environmental Sustainability and Climate Action",
              "Smart Governance and Public Policy Analytics",
              "Ethical AI and Technology Governance",
            ],
          },
        ],
      },

      features: {
        title: "Publication Features",
        icon: "bi-award",
        content: [
          "Double-blind peer review process",
          "Indexed and abstracted in reputed databases (under application)",
          "Biannually publishing frequency",
          "Open-access publication",
          "Strict adherence to academic integrity and ethical guidelines (Committee on Publication Ethics (COPE)-compliant)",
        ],
      },

      guidelines: {
        title: "Author Guidelines",
        icon: "bi-file-text",
        content: {
          types: {
            title: "Types of Papers",
            description:
              "The journal accepts original research and review papers in multidisciplinary domain. Author/s should select appropriate domain and article type from the list of options before submitting their paper.",
          },
          checklist: {
            title: "Submission Checklist",
            items: [
              "One author has been designated as the corresponding author with full contact details (E-mail address, Affiliation of all authors with country)",
              "Manuscript includes keywords",
              "All figures with captions and figure numbers",
              "All tables including titles, description, footnotes and table numbers",
              "Check all figures and tables are properly cited in the text as per the template provided",
              "Supplementary files (if applicable)",
              "Manuscript has been 'SPELL CHECKED' and 'GRAMMAR CHECKED'",
              "All references mentioned in the Reference List are properly cited in the text",
              "Permission has been taken for use of copyrighted material from other sources",
              "A competing interest's statement is provided, even if the authors have no competing interests to declare",
            ],
          },
          ethics: {
            title: "Ethics in Publishing",
            sections: [
              {
                title: "Plagiarism and Digital Object Identifier (DOI)",
                content:
                  "A comprehensive plagiarism detection procedure will be used to every manuscript submitted to a publication. Additionally, each work that has been authorized for journal publication will be assigned a Digital Object Identifier (DOI). The author is responsible for ensuring that the submitted article is free of any unauthorized use of copyrighted material and has a zero-similarity index.",
              },
              {
                title: "Authorship",
                content:
                  "The author/s should be accountable for the content which they included in the manuscript, since it is their own creation that they wish to share with the readers. The requirements for authorship must be met by each author, co-author, and corresponding author, and the paper must have the proper acknowledgements.",
              },
              {
                title: "Licensing and Copyright",
                content:
                  "The terms and conditions of the Creative Commons Attribution License (CC-BY) will govern the distribution of all journal articles. Therefore, as long as the original article and source are properly mentioned, anyone is free to copy, distribute, and transmit the article.",
              },
              {
                title: "Conflict of Interest and Acknowledgement",
                content:
                  "Any possible conflicts of interest pertaining to a particular publication should be disclosed by the authors. The author should give credits to any funding agency, host institution, or individual that provided support for his/her research ",
              },
               {
                title: "Publication Malpractice",
                content:
                  "The editor is in charge of ensuring a fair and suitable peer review procedure as well as making impartial and equitable choices. If data fabrication is discovered in the paper, the editor may request supporting documentation from the author. If an article's supporting information is inadequate, it could be rejected as publication malpractice",
              },
              {
                title: "Publication Malpractice",
                content:
                  "The editor is in charge of ensuring a fair and suitable peer review procedure as well as making impartial and equitable choices. If data fabrication is discovered in the paper, the editor may request supporting documentation from the author. If an article's supporting information is inadequate, it could be rejected as publication malpractice",
              },
              {
                title: "Open access",
                content:
                  "Every research paper that is published in a journal is immediately available for free reading, downloading, and sharing. The Creative Commons license, which allows for use, distribution, and reproduction in any format as long as the original work is properly cited, governs the publication of these articles.",
              },
              
            ],
          },
        },
      },

      submission: {
        title: "Submission Process",
        icon: "bi-upload",
        content: [
          "Online submitted manuscripts are considered for publication. If author/s encounter any issues with the submission process, kindly submit your work via email.",
          "The author must prepare their work according to the journal template. Author/s must make sure their work is free of plagiarism before submitting it to the journal.",
          "Only unpublished or extended versions of published papers are accepted for submission. Papers that are submitted must be written in English.",
        ],
      },

      review: {
        title: "Peer Review Process",
        icon: "bi-people",
        content: [
          "The double-blind review is used by journal. The editor will first determine if each contribution is appropriate for the journal.",
          "After being judged appropriate, papers are usually forwarded to at least two independent reviewers who will evaluate the paper's scientific merit.",
          "The final decision about whether to approve or reject an article depends on editor.",
        ],
      },

      processing: {
        title: "Use of word processing software",
        icon: "bi-code",
        content: [
          "It is necessary that the file be saved in the word processor's native format. Double columns should be used for the text. Make sure the text is laid out as simply as you can. When the article is processed, the majority of formatting codes will be eliminated and replaced. Specifically, avoid using the word processor's features to hyphenate words or justify text.",
          " Use bold type, italics, subscripts, superscripts, and other formatting elements. If you are using a table grid to prepare tables, use one grid for each table and not one grid for each row. If there isn't a grid, align columns using tabs rather than spaces. The preparation of the electronic text should be rather comparable to that of traditional manuscripts. ",
        ],
      },
      structure: {
        title: "Structure of Paper",
        icon: "bi-file-earmark-medical-fill",
        content: [
          "Please check the paper template available on template section.",
        ],
      },

      policies: {
        title: "Publication Policies & Ethics",
        icon: "bi-shield-check",
        content: {
          publicationEthics: {
            title: "Publication Ethics",
            sections: [
              {
                title: "Publication Ethics",
                points: [
                  "The calibre of the writers' work is directly reflected in whether or not an article is published in a peer-reviewed journal. Peer-reviewed publications increase scientific methods and publication quality. Therefore, everyone who is involved in the publishing process i.e., the publisher, the peer reviewer, the journal editor, and the author should adhere to publication ethics."
                ]
              },
              {
                title: "Responsibilities of the Publisher",
                points: [
                  "The publisher plays a crucial role in appointing the journal's Editor-in-Chief and assisting them in upholding the integrity of the academic record.",
                  "The publisher may request a guest or executive editor to publish special issues or conference proceedings in the journal after properly reporting to the journal's editor-in-chief.",
                  "We are dedicated to making sure that editorial choices are neither influenced or impacted by the possibility of advertising, reprints, or other commercial money."
                ]
              },
              {
                title: "Responsibilities of Editor in Chief and Editorial Board Members",
                points: [
                  "The editor in chief and the designated members of the editorial board are in charge of making any necessary modifications to the format and content of the manuscripts that are submitted to the journal.",
                  "A double-blind review process must be used to evaluate submitted review or research manuscripts, and the editor may solicit additional opinions if necessary. The editor is responsible for making sure the peer review procedure is impartial, timely, and equitable.",
                  "All manuscripts submitted for review must be kept confidential and should not be shared with anybody outside of the publisher, reviewers, and corresponding author.",
                  "The editor-in-chief cannot decide on manuscripts written by family members or publish his own review or research paper in the journal.",
                  "Editors are required to investigate ethical issues in a fair and appropriate manner."
                ]
              },
              {
                title: "Responsibility of Reviewers",
                points: [
                  "The reviewer must maintain the confidentiality of the review process, and any information concerning the manuscript or the review process must not be shared with third parties.",
                  "In the manner specified by the editor, reviewers should include their thoughts about the manuscript along with supporting details.",
                  "Reviewers must finish their reviews by the deadline defined by the journal.",
                  "Reviewers should refrain from reviewing submissions in which they have a conflict of interest because of their affiliations with any of the authors, businesses, or organisations associated with the articles, whether they be collaborative, competing, or otherwise."
                ]
              },
              {
                title: "Responsibilities of Authors",
                points: [
                  "Every manuscript needs to be the authors' unique work and free of plagiarism.",
                  "A manuscript must include substantial contributions from each author, and writers must accept authorship.",
                  "Authors must accurately and correctly acknowledge other people's work.",
                  "Any financial or other significant conflicts of interest that might affect the findings or interpretation of the paper should be explicitly stated by the authors, who should also give credit to any people or institutions who have funded the study.",
                  "During peer review, authors could be asked to contribute further information about submitted manuscripts, which must ideally be made publicly available.",
                  "Every manuscript must have never been published before and not be being considered for publication elsewhere."
                ]
              }
            ]
          },
          authorship: {
            title: "Authorship Policy",
            points: [
              "Author/s of the submitted manuscript has to take responsibility of reported work/ contribution included in the manuscript is their own work and they want to share with readers.",
              "Author/s must fulfil the conditions of authorship and provide appropriate acknowledgements.",
              "The affiliation stated in the manuscript must be verified by authors from various organisations or nations. It is important for authors that their submitted manuscript is not being considered (or accepted for publication) elsewhere. Sections of the document that overlap with previously published or submitted content should be cited and referenced properly.",
              "An individual who has contributed in some way but does not fulfil the authorship requirements for a particular work should be recognised.",
              "To prevent authorship disputes after publication, the author must include their name, affiliation with the country, and email address in the manuscript. If an author wants to update or correct their name after it has been published, the journal should take it into consideration by provide the necessary supporting documentations.",
              "Editors and members of the editorial board are excluded from publication if their names are listed as co-authors or authors of a manuscript. Additionally, the publisher discourages the Editor-in-Chief from publishing a paper."
            ],
          },
          conflicts: {
            title: "Conflicts of Interest Policy",
            points: [
              "The author/s has the responsibility of revealing any conflicting interests that are pertinent to the study in the Acknowledgements section. In the Acknowledgements section, all institutional and corporate funding sources for the project should be acknowledged. Furthermore, if a manuscript deals with a commercial product, the name of the manufacturer must be clearly stated in the Materials and Methods section or, if applicable, elsewhere in the text.",
              "Any business ties, consultancies, stock or equity holdings, and patent-licensing agreements that might be viewed as posing a conflict of interest with regard to the submitted manuscript must be disclosed by all author/s in the manuscript submittal letter. Relationships, whether financial or otherwise, that could impair an author's objectivity while presenting study results and interests whose value would be increased by the results published are examples of potentially conflicting interests. The specifics of the editor's revelation will be kept private. It is crucial to remember that including a corporate name in the manuscript's author address lines does not amount to disclosure."
            ],
          },
          copyright: {
            title: "Copyright and Licensing Policy",
            points: [
              "An intellectual property right (IPR) known as copyright grants the author or creator of a work specific rights to safeguard how their creations are utilised. The Creative Commons Attribution License (CC-BY) shall govern the distribution of all works published in journals owned by Publisher. Therefore, as long as the original article and source are properly mentioned, anyone is free to copy, distribute, and transmit the article.",
              "Authors are permitted to use their own articles for non-commercial purposes without requesting permission from Publisher because the text published in their journal will be protected by copyright. We would like to call your attention to the safeguard that copyright provides against numerous photocopies by copy centres, libraries, and teachers. According to the 1976 copyright legislation, photocopies that exceed 'fair use'—which is defined as a single copy for personal use—cannot be created without the copyright owner's consent. As a result, the journals only permit multiple copies for personal or educational use upon written request and payment of the necessary fee per copy to us. A copyright notice must be included with every copy.",
              "It is the policy of Publisher Journals to allow any respectable publisher to republish any of our pieces, provided that the author's consent is acquired. Publishers who would like to reprint any of our content are asked to submit a written request to the editors."
            ],
          },
          openAccess: {
            title: "Open Access Policy",
            points: [
              "Every research article published in a journal is immediately available for free reading, downloading, and sharing. The Creative Commons license, which allows for use, distribution, and reproduction in any format as long as the original work is properly cited, governs the publication of these articles.",
              "The Bethesda Statement on Open Access Publishing defines an open access publication as follows: A publication is considered open access if it satisfies the two requirements listed below: (i) All users are granted a free, irrevocable, worldwide, perpetual right of access to the work by the author/s of the copyright, as well as a license to copy, use, distribute, transmit, and display it publicly. (ii) They are also granted permission to create and distribute derivative works in any digital medium for any responsible purpose, provided that proper authorship is attributed. Additionally, they are permitted to make small quantities of printed copies for their own personal use.",
              "After initial publication, a complete version of the work and all supplemental materials, including a copy of the permission as mentioned above, are deposited in at least one online repository supported by a Government agency, scholarly society, academic institution, or other reputable organisation that aims to facilitate open access, unrestricted distribution, interoperability, and long-term archiving (for the biomedical sciences, PubMed Central is such a repository).",
              "Open access licenses: Three layers of licenses CC-BY, CC-BY-NC and CC-BY-NC-ND ensure that the spectrum of rights isn’t just a legal concept. It’s something that the creators of works can understand, their users can understand, and even the Web itself can understand. See the Creative Commons website for more details https://creativecommons.org/licenses/ We aim to provide CC-BY 4.0 license which defines how readers can reuse open access articles published on our platforms. For further information on what the CC BY licence allows, please refer to this page. This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials."
            ]
          },
          peerReview: {
            title: "Peer-Review Policy",
            points: [
              "Peer review's primary goal is to have original scientific research or review papers published in journals. All papers are peer evaluated in accordance with the essential criteria listed below, and Publishers journals maintain a fair and high-level peer review process in which our reviewers play a significant role.",
              "First, the Editor-in-Chief assesses the received paper on his own terms. The paper proceeds forward to the review process if it is written in clear English and falls within the journal's goals and scope.",
              "At least two reviewers who are relevant to the paper's scope evaluate every research part. Double blind reviews are used in the review process, which makes both writers and reviewers anonymous.",
              "Reviewers must assess the manuscript to ensure that it is unique, technically sound, adheres to the author's instructions, presents outcomes, etc. Within a given time frame, the reviewer's judgement should be sent to the editor-in-chief along with all journal comments in the review report.",
              "The Editor-in-Chief has the authority to accept, reject, or request a modification from the author of only one reviewer report if no reviewer report is received within the allotted time limit and the editor is fully persuaded by that report.",
              "The editors-in-chief of the journals make all choices on publication based on the reviews that are submitted.",
              "The editor-in-chief may consult an editorial board member when making a judgement based on the reviewer's report."
            ]
          },
          plagiarism: {
            title: "Plagiarism Policy",
            points: [
              "Using someone else's words or ideas without giving them credit is called plagiarism. The unethical practice of taking another author's or researcher's words or ideas—whether intentionally or unintentionally — or your own earlier works without giving due credit is known as plagiarism. Plagiarism in a paper indicates low content quality, and the editor may reject it or suggest that it be removed.",
              "Every manuscript sent to one of our journals will undergo a thorough plagiarism detection process. Additionally, Crossref, in collaboration with Informatics Publishing Limited, will give a Digital Object Identifier (DOI) to every accepted manuscript for publication in the journal. The author must ensure that no copyrighted material has been utilised in the manuscript without permission and that the submitted paper has a similarity index of no more than 20%.",
              "In order to prevent plagiarism, authors declare that: (1) I/we am/are aware that plagiarism is unethical in the workplace. (2) The reference paper's text should not be copied and pasted. Rather, reiterate the concept using your own words. (3) Both in the text and in the Reference section, quotation sources are properly cited. (4) Keep track of the references you cite. Utilise citation management tools such as Mendeley Reference Manager or EndNote to keep track of the paper's citations. (5) Be careful to adhere to the journal's citation style requirements and rules (e.g. IEEE, APA, MLA, Chicago, etc). (6) Don't plagiarise yourself; don't use parts of your own published or copyrighted work without giving due credit. (7) The manuscript does not contain any copyrighted content without authorisation. (8) I/We shall take full responsibility for the viewpoints presented in the paper and for resolving any disagreements that may arise from the improper use of any copyrighted elements in the submission."
            ]
          },
          archiving: {
            title: "Archiving Policy",
            points: [
              "Author/s may save pre-print and post-print versions of their work, as well as publisher versions and PDFs, to their own or other institutions' archives or libraries without the journal's or publisher's consent.",
              "As long as the journal name and Publisher are cited as the original publication location and that the proper citation information is provided, authors of articles published in READS have the right to deposit their accepted manuscript or the version of record (published papers) in institutional and/or centrally organised repositories and make it immediately available to the public upon acceptance and publication.",
              "Digital Archiving and Preservation: The Publisher commits to upload the metadata of all of its journals to PKP PN, Internet Achieve, and other repositories like the Worldcat digital collection gateway in order to digitally preserve all published scientific work. This aims to ensure that, in the event that data in Publishers' personal archival records is inadvertently lost, the community will still have access to the published scholarly content."
            ]
          }
        },
      },  
    },
  }

  const sidebarItems = [
    { key: "about", title: "About", icon: "bi-info-circle" },
    { key: "aim", title: "Aim", icon: "bi-bullseye" },
    { key: "scope", title: "Scope", icon: "bi-diagram-3" },
    { key: "features", title: "Publication Features", icon: "bi-award" },
    { key: "guidelines", title: "Author Guidelines", icon: "bi-file-text" },
    { key: "submission", title: "Submission", icon: "bi-upload" },
    { key: "review", title: "Peer Review", icon: "bi-people" },
    { key: "processing", title: "Use of word processing software", icon: "bi-code" },
    { key: "structure", title: "Structure of Paper", icon: "bi-file-earmark-medical-fill" },
    { key: "policies", title: "Policies", icon: "bi-shield-check" },
  ]


  const renderContent = () => {
    const section = journalData.sections[activeSection]
    if (!section) {
      return (
        <div>
          <h2 style={{ color: "#1e3a5f", marginBottom: "2rem" }}>Section not found</h2>
          <p style={{ color: "#6c757d" }}>The selected section does not exist.</p>
        </div>
      )
    }

    switch (activeSection) {
      case "scope":
        return (
          <div>
            <h2
              style={{ color: "#1e3a5f", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className={`bi ${section.icon} icon-orange`}></i>
              {section.title}
            </h2>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem", color: "#6c757d" }}>{section.content}</p>

            <div className="scope-categories">
              {section.categories.map((category, index) => (
                <div key={index} className="scope-category" style={{ marginBottom: "2rem" }}>
                  <h3 style={{ color: "#ff6b35", marginBottom: "1rem", fontSize: "1.3rem" }}>{category.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          marginBottom: "0.75rem",
                          display: "flex",
                          alignItems: "flex-start",
                          color: "#6c757d",
                          fontSize: "0.95rem",
                          lineHeight: "1.5",
                        }}
                      >
                        <i
                          className="bi bi-check-circle"
                          style={{
                            color: "#ff6b35",
                            marginRight: "0.75rem",
                            marginTop: "0.25rem",
                            flexShrink: 0,
                          }}
                        ></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )

      case "features":
        return (
          <div>
            <h2
              style={{ color: "#1e3a5f", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className={`bi ${section.icon} icon-orange`}></i>
              {section.title}
            </h2>
            <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
              {section.content.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f8f9fa",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    borderLeft: "4px solid #ff6b35",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <i className="bi bi-check-circle" style={{ color: "#ff6b35", fontSize: "1.2rem" }}></i>
                  <span style={{ color: "#6c757d", fontSize: "0.95rem" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )

      case "guidelines":
        return (
          <div>
            <h2
              style={{ color: "#1e3a5f", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className={`bi ${section.icon} icon-orange`}></i>
              {section.title}
            </h2>

            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
                <i className="bi bi-file-earmark-text icon-orange"></i> {section.content.types.title}
              </h3>
              <p style={{ color: "#6c757d", fontSize: "0.95rem", lineHeight: "1.6" }}>
                {section.content.types.description}
              </p>
            </div>

            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
                <i className="bi bi-list-check icon-orange"></i> {section.content.checklist.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {section.content.checklist.items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "0.75rem",
                      display: "flex",
                      alignItems: "flex-start",
                      color: "#6c757d",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <i
                      className="bi bi-check2"
                      style={{
                        color: "#ff6b35",
                        marginRight: "0.75rem",
                        marginTop: "0.25rem",
                        flexShrink: 0,
                      }}
                    ></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
                <i className="bi bi-shield-check icon-orange"></i> {section.content.ethics.title}
              </h3>
              {section.content.ethics.sections.map((ethicsSection, index) => (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <h4 style={{ color: "#1e3a5f", marginBottom: "0.75rem", fontSize: "1rem" }}>{ethicsSection.title}</h4>
                  <p style={{ color: "#6c757d", fontSize: "0.9rem", lineHeight: "1.6" }}>{ethicsSection.content}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "policies":
        return (
          <div>
            <h2
              style={{ color: "#1e3a5f", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className={`bi ${section.icon} icon-orange`}></i>
              {section.title}
            </h2>
            {/* Render each policy section, handling both points and sections arrays */}
            {Object.entries(section.content).map(([key, policy]) => (
              <div key={key} style={{ marginBottom: "3rem" }}>
                <h3 style={{ color: "#ff6b35", marginBottom: "1rem" }}>
                  <i className="bi bi-gear icon-orange"></i> {policy.title}
                </h3>
                {/* If policy.sections exists, render each section with its title and points */}
                {policy.sections ? (
                  policy.sections.map((subSection, idx) => (
                    <div key={idx} style={{ marginBottom: "1.5rem" }}>
                      <h4 style={{ color: "#1e3a5f", marginBottom: "0.75rem", fontSize: "1rem" }}>{subSection.title}</h4>
                      {subSection.points && (
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          {subSection.points.map((point, index) => (
                            <li
                              key={index}
                              style={{
                                marginBottom: "1rem",
                                display: "flex",
                                alignItems: "flex-start",
                                color: "#6c757d",
                                fontSize: "0.9rem",
                                lineHeight: "1.6",
                              }}
                            >
                              <i
                                className="bi bi-dot"
                                style={{
                                  color: "#ff6b35",
                                  marginRight: "0.5rem",
                                  marginTop: "0.25rem",
                                  flexShrink: 0,
                                  fontSize: "1.2rem",
                                }}
                              ></i>
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))
                ) : (
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {policy.points &&
                      policy.points.map((point, index) => (
                        <li
                          key={index}
                          style={{
                            marginBottom: "1rem",
                            display: "flex",
                            alignItems: "flex-start",
                            color: "#6c757d",
                            fontSize: "0.9rem",
                            lineHeight: "1.6",
                          }}
                        >
                          <i
                            className="bi bi-dot"
                            style={{
                              color: "#ff6b35",
                              marginRight: "0.5rem",
                              marginTop: "0.25rem",
                              flexShrink: 0,
                              fontSize: "1.2rem",
                            }}
                          ></i>
                          {point}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )

      default:
        return (
          <div>
            <h2
              style={{ color: "#1e3a5f", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className={`bi ${section.icon} icon-orange`}></i>
              {section.title}
            </h2>
            {Array.isArray(section.content) ? (
              section.content.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    marginBottom: "1.5rem",
                    color: "#6c757d",
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                  }}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p style={{ color: "#6c757d", fontSize: "0.95rem", lineHeight: "1.7" }}>{section.content}</p>
            )}
          </div>
        )
    }
  }

  return (
    <div>
      {/* Journal Header */}
      <section className="journal-hero">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "rgba(255, 107, 53, 0.2)",
                color: "#ff6b35",
                padding: "0.5rem 1.5rem",
                borderRadius: "25px",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "2rem",
                display: "inline-block",
                border: "1px solid #ff6b35",
              }}
            >
              <i className="bi bi-journal-text"></i> {journalData.subtitle}
            </div>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "white" }}>{journalData.title}</h1>

            <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", opacity: 0.9, color: "white" }}>
              ({journalData.shortTitle})
            </h2>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <span
                style={{
                  background: "rgba(40, 167, 69, 0.8)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className="bi bi-unlock"></i> Open Access
              </span>
              <span
                style={{
                  background: "rgba(255, 107, 53, 0.8)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className="bi bi-people"></i> Peer-Reviewed
              </span>
              <span
                style={{
                  background: "rgba(30, 58, 95, 0.8)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className="bi bi-calendar2"></i> Biannual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Content with Sidebar */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "3rem" }}>
            {/* Sidebar Navigation */}
            <div className="journal-sidebar">
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3 style={{ color: "#1e3a5f", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                  <i className="bi bi-list icon-orange"></i> Journal Contents
                </h3>

                <nav>
                  {sidebarItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveSection(item.key)}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        marginBottom: "0.5rem",
                        background: activeSection === item.key ? "#fff3e0" : "transparent",
                        color: activeSection === item.key ? "#ff6b35" : "#6c757d",
                        border: activeSection === item.key ? "1px solid #ff6b35" : "1px solid transparent",
                        borderRadius: "8px",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      onMouseEnter={(e) => {
                        if (activeSection !== item.key) {
                          e.target.style.background = "#f8f9fa"
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeSection !== item.key) {
                          e.target.style.background = "transparent"
                        }
                      }}
                    >
                      <i className={`bi ${item.icon}`}></i>
                      {item.title}
                    </button>
                  ))}
                </nav>

                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid #e9ecef",
                    textAlign: "center",
                  }}
                >
                  {/* <button className="btn btn-primary" style={{ width: "100%" }}>
                    <i className="bi bi-upload"></i> Submit Manuscript
                  </button> */}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="journal-content">
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "3rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  minHeight: "600px",
                }}
              >
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Information */}
      <section className="section" style={{ background: "#1e3a5f", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "white", marginBottom: "2rem" }}>
              <i className="bi bi-people icon-white"></i> Editorial Information
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div>
                <h4 style={{ color: "#ff6b35", marginBottom: "0.5rem" }}>
                  <i className="bi bi-calendar-event"></i> Publication Frequency
                </h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Biannual</p>
              </div>
              <div>
                <h4 style={{ color: "#ff6b35", marginBottom: "0.5rem" }}>
                  <i className="bi bi-eye-slash"></i> Review Process
                </h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Double-Blind</p>
              </div>
              <div>
                <h4 style={{ color: "#ff6b35", marginBottom: "0.5rem" }}>
                  <i className="bi bi-unlock"></i> Access Type
                </h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Open Access</p>
              </div>
            </div>
            <p style={{ marginTop: "2rem", opacity: 0.8 }}>
              <i className="bi bi-person-badge"></i> Editorial Board: One Editor-in-Chief and 5 Editorial Board Members
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journals
