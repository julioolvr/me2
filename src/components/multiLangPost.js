import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Time = styled.time`
  min-width: 100px;
  display: inline-block;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.lightText};
  margin-right: 1em;
`;

const Extra = styled.span`
  display: inline-block;
  font-size: 0.7em;
`;

const PostRow = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3em;
`;

const PostTitle = styled.div`
  flex: 1;
  line-height: 1.2em;

  a {
    background-image: none;
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
          <Link to={postInCurrentLang.path}>{postInCurrentLang.context.frontmatter.title}</Link>
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
          <Link to={postInOtherLang.path}>{postInOtherLang.context.frontmatter.title}</Link>
        </PostTitle>
        <Time>{postInOtherLang.context.date}</Time>
        <Extra>
          <span>{warningText}</span>
        </Extra>
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
        <Link to={postInCurrentLang.path}>{postInCurrentLang.context.frontmatter.title}</Link>
      </PostTitle>
      <Time>{postInCurrentLang.context.date}</Time>
      <Extra>
        <Link to={postInOtherLang.path}>{infoText}</Link>
      </Extra>
    </PostRow>
  );
}

MultiLangPost.propTypes = {
  postGroup: PropTypes.shape({ es: PropTypes.object, en: PropTypes.object }).isRequired,
  lang: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default MultiLangPost;
