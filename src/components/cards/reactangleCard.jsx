function RectangleCard({ leftLink, rightLink, name, rightLinkName }) {
  return (
    <div class="pro-card">
      <div class="course-name">
        <a
          href={leftLink}
          target="_blank"
          rel="noreferrer"
          class="font-weight-bold"
          data-toggle="tooltip"
          title={name}
        >
          {name.length > 30 ? name.slice(0, 30) + "..." : name}
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
        {rightLinkName ? rightLinkName : "Certificate"}
        </a>
      </div>
        )
      }
    </div>
  );
}

export default RectangleCard;
