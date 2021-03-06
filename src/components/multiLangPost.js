import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Time = styled.time`
  display: inline-block;
  font-size: 0.8em;
  color: var(--metadata-color);
`;

const Extra = styled.span`
  display: inline-block;
  font-size: 0.7em;
  color: var(--metadata-color);

  a {
    color: var(--text-color);
  }
`;

const PostRow = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.scale[6]};
`;

const PostTitle = styled.div`
  flex: 1;
  line-height: 1.2em;
  font-size: ${({ theme }) => theme.typography.scale[6]};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-weight: bold;

  a {
    background-image: none;
    color: var(--text-color);
  }
`;

function currentLang(group, lang) {
  return group[lang];
}

function otherLang(group, lang) {
  const other = Object.keys(group).filter(key => key !== lang)[0];

  if (other) {
    return group[other];
  }

  return null;
}

function MultiLangPost({ postGroup, lang }) {
  const postInCurrentLang = currentLang(postGroup, lang);
  const postInOtherLang = otherLang(postGroup, lang);

  if (postInCurrentLang && !postInOtherLang) {
    return (
      <PostRow>
        <PostTitle>
          <Link to={postInCurrentLang.path}>
            {postInCurrentLang.context.frontmatter.title}
          </Link>
        </PostTitle>
        <Time>{postInCurrentLang.context.date}</Time>
      </PostRow>
    );
  }

  if (!postInCurrentLang && postInOtherLang) {
    let warningText;

    if (lang === 'en') {
      warningText = 'Spanish only';
    } else {
      warningText = 'Solo en inglés';
    }

    return (
      <PostRow>
        <PostTitle>
          <Link to={postInOtherLang.path}>
            {postInOtherLang.context.frontmatter.title}
          </Link>
        </PostTitle>

        <div>
          <Time>{postInOtherLang.context.date}</Time>
          <Extra>
            <span>&nbsp;- {warningText}</span>
          </Extra>
        </div>
      </PostRow>
    );
  }

  let infoText;

  if (lang === 'en') {
    infoText = 'También en español';
  } else {
    infoText = 'Also available in English';
  }

  return (
    <PostRow>
      <PostTitle>
        <Link to={postInCurrentLang.path}>
          {postInCurrentLang.context.frontmatter.title}
        </Link>
      </PostTitle>

      <div>
        <Time>{postInCurrentLang.context.date} </Time>
        <Extra>
          &nbsp;- <Link to={postInOtherLang.path}>{infoText}</Link>
        </Extra>
      </div>
    </PostRow>
  );
}

MultiLangPost.propTypes = {
  postGroup: PropTypes.shape({
    es: PropTypes.object,
    en: PropTypes.object,
  }).isRequired,
  lang: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default MultiLangPost;
