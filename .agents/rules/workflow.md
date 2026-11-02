* GIT WORKFLOW: Never commit or push directly to main. For every task: 1) git checkout -b feature/[task-name], 2) commit changes, 3) push branch to origin, 4) output the direct GitHub PR URL and stop for manual review.
* LAYOUT: Never use absolute positioning or negative margins for document/section flow (preserve decorative floating stickers/cursors). Next.js <Image/> components must always use intrinsic width and height props in normal document flow (never fill wrappers).
* DATA: Never modify data/caseStudiesData.ts during styling or layout tasks unless explicitly asked.
