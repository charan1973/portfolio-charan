function RectangleCard({ leftLink, rightLink, name }) {
  return (
    <div class="pro-card">
      <div class="course-name">
        <a
          href={leftLink}
          target="_blank"
          rel="noreferrer"
          class="font-weight-bold"
        >
          {name}
        </a>
      </div>
      {
        rightLink && (
      <div>
        <a
          href={rightLink}
          target="_blank"
          rel="noreferrer"
        >
          Certificate
        </a>
      </div>
        )
      }
    </div>
  );
}

export default RectangleCard;
