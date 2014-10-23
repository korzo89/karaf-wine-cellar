package org.karaf.winecellar.dataendpoint.impl;

import org.karaf.winecellar.dao.GeneralDAO;
import org.karaf.winecellar.dataendpoint.CRUDEndpoint;

import java.util.List;

public class CRUDEndpointImpl <E> implements CRUDEndpoint {

    private Class<E> clazz;
    GeneralDAO generalDAO;

    public CRUDEndpointImpl(Class<E> clazz) {
        this.clazz = clazz;
    }

    public void setGeneralDAO(GeneralDAO generalDAO) {
        this.generalDAO = generalDAO;
    }

    @Override
    public List getAll() {
        return generalDAO.getAll(clazz);
    }
}